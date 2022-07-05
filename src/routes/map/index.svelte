<script>
	// ** Components
	import Map from './map.svelte';
	import FinderLocation from './finderLocation.svelte';
	import RoutesSuggestion from './routesSuggestion.svelte';
    import RouteLegs from "./routeLegs.svelte";
	// ** Stores
	import { destination } from './store.js';
	// ** Modules
	import getDateTime from './getDateTime';

	const cur_pos = [51.49164814536886, -0.10065042998557304]; // By geolocalization
	let promiseJourneys;
    let map;
    let selectedRoute = false;
    let routeLegs = [];

	async function getJourneys(dest) {
		const { date, time } = getDateTime();
		const cur_lat = cur_pos[0];
		const cur_lng = cur_pos[1];
		const dest_lat = dest[1];
		const dest_lng = dest[0];
		const mode = 'bus'; //mode=${mode}

		const res = await fetch(
			`https://api.tfl.gov.uk/journey/journeyResults/${cur_lat},${cur_lng}/to/${dest_lat},${dest_lng}?&useMultiModalCall=true&time=${time}&date=${date}&timeIs=departing`
		);

		const json_data = await res.json();

		if (res.ok) {
			return json_data.journeys;
		} else {
			console.log(res);
			throw new Error(json_data);
		}
	}


    function loadRoute(event){
        const legs = event.detail.journey.legs;
        map.setRoute(legs);
        selectedRoute = true

        routeLegs = legs
    }

	destination.subscribe((dest) => {
		if (dest.center) promiseJourneys = getJourneys(dest.center);
	});
</script>
<Map {cur_pos} bind:this={map}/>
<div class="controller">
	<div class="separator">----</div>
	<form on:submit|preventDefault={getJourneys} action="getDirection" method="get">
		<FinderLocation lat={cur_pos[0]} lng={cur_pos[1]} />
	</form>
    {#if !selectedRoute}
	<div class="journeys-container">
		<ul class="journeys">
			{#if promiseJourneys}
				{#await promiseJourneys}
					<li class="loading">Buscando rutas...</li>
				{:then journeys}
					{#each journeys as journey}
						<RoutesSuggestion on:journeySelected={loadRoute} {journey} />
					{/each}
				{:catch err}
					<li class="wrong">Algo salio mal</li>
				{/await}
			{/if}
		</ul>
	</div>
    {:else}
        <RouteLegs {routeLegs} on:goBack={() => {selectedRoute = false}}/>
    {/if}

</div>

<style>
	.controller {
		position: relative;
		top: -10px;
		border-radius: 15px 15px 0 0;
		background-color: #fff;
		box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.15);
		z-index: 10;
	}

	.separator {
		height: 25px;
		text-align: center;
		border-bottom: 1px solid #c2c2c2;
		margin: 5px 0;
		cursor: row-resize;
	}

	/* LOADING */
	li.loading {
		position: relative;
		list-style: none;
		text-align: center;
		padding: 8px 0;
		margin: 0 auto;
		width: fit-content;
		background-color: transparent;
	}

	li.loading::after {
		content: '';
		background-color: #ec7070;
		position: absolute;
		bottom: 0;
		display: block;
		height: 4px;
		left: 0;
		animation: grow-bar 0.6s ease-in-out infinite alternate-reverse;
	}
	@keyframes grow-bar {
		0% {
			right: 100%;
		}
		50% {
			right: 0;
			left: 0%;
		}
		100% {
			left: 100%;
			right: 0;
		}
	}

	/* WORNG */
	li.wrong {
		padding: 20px;
		text-align: center;
		color: red;
		font-weight: bold;
	}
</style>
