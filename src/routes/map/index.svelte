<script>
	import Map from './map.svelte';
	import getDateTime from './getDateTime';

	var placesAutoComplete;
	var cur_pos = [51.491724541481474, -0.10041028444802302];
	let promiseJourneys;

	async function getJourneys(e) {
		const { date, time } = getDateTime();
		const cur_lat = cur_pos[0];
		const cur_lng = cur_pos[1];
		const dest_lat = e.suggestion.latlng.lat;
		const dest_lng = e.suggestion.latlng.lng;
		const mode = 'bus';

		const res = await fetch(
			`https://api.tfl.gov.uk/journey/journeyResults/${cur_lat},${cur_lng}/to/${dest_lat},${dest_lng}?mode=${mode}&useMultiModalCall=true&time=${time}&date=${date}&timeIs=departing`
		);
		const json_data = await res.json();
		console.log(json_data.journeys)
		if (res.ok) {
			return json_data.journeys;
		} else {
			console.log(res)
			throw new Error(json_data);
		}
	}

	function initAutoComplete() {
		console.log('initAutoComplete');
		placesAutoComplete = places({
			container: document.querySelector('#txtDestination')
		});

		placesAutoComplete.on('change', (e) => {
			promiseJourneys = getJourneys(e);
		});
	}
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/places.js@1.19.0" on:load={initAutoComplete}></script>
</svelte:head>

<Map {cur_pos} />
<div class="controller">
	<div class="separator">----</div>
	<form action="getDirection" method="get">
		<input
			type="search"
			name="destination"
			id="txtDestination"
			placeholder="Where you want to go?"
		/>
	</form>
</div>
<div class="journeys-container">
	<ul class="journeys">
		{#if promiseJourneys}
			{#await promiseJourneys}
				<li>Buscando rutas...</li>
			{:then journeys}
				{#each journeys as journey}
					<a href="##">
						<li>Duration: {journey.duration} -- 
						{#each journey.legs as leg}
							{leg.instruction.summary}({leg.duration}) -
						{/each}


					</li>
						- Costo: {journey.fare ? journey.fare.totalCost / 100 : 0}
					</a>
				{/each}
			{:catch err}
				<li>Algo salio mal: {console.dir(err.message)}</li>
			{/await}
		{/if}
	</ul>
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

	input {
		border: none;
	}
</style>
