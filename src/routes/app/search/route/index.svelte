<script context="module">
	export async function load({ url, session }) {
		if (!session.authenticated)
			return {
				status: 302,
				redirect: `/login?path=${encodeURIComponent(url.pathname + url.search)}`
			};

		return {
			props: {
				email: session.user.email,
				name: session.user.name
			}
		};
	}
</script>

<script>
	import LocationCard from '../../../components/LocationCard.svelte';
	import Map from '../../../components/map.svelte';
	import ModalDateTime from '../../../components/ModalDateTime.svelte';
	import Loading from '../../../components/Loading.svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const location_origin = JSON.parse($page.url.searchParams.get('location_origin'));
	const location_destiny = JSON.parse($page.url.searchParams.get('location_destiny'));
	let visible_datetime_modal = false;
	let title = 'hola';
	let btn_time_title_text = 'Departure: Now';
	const domain = 'https://api.tfl.gov.uk';
	const route = 'journey/journeyResults';
	const origin = `${location_origin.location.lat},${location_origin.location.lng}`;
	const destiny = `${location_destiny.location.lat},${location_destiny.location.lng}`;
	const params = {
		useMultiModalCall: undefined,
		time: undefined,
		date: undefined,
		timeIs: undefined
	};

	// let suggestions_promise;

	// onMount(async () => {
	// 	suggestions_promise = new Promise(async (resolve, reject) => {
	// 		try {
	// 			const url = [domain, route, origin, 'to', destiny].join('/');
	// 			let parameters = '?';
	// 			for (const [key, value] of Object.entries(params)) {
	// 				if (value) parameters += `${key}=${value}`;
	// 			}
	// 			const res = await fetch(url + parameters);
	// 			const data = await res.json();
	// 			console.log(data);
	// 			resolve(data);
	// 		} catch (err) {
	// 			reject(err);
	// 		}
	// 	});
	// });

	async function getSuggestions() {
		const url = [domain, route, origin, 'to', destiny].join('/');
		let parameters = '?';
		for (const [key, value] of Object.entries(params)) {
			if (value) parameters += `${key}=${value}`;
		}
		const res = await fetch(url + parameters);
		const data = await res.json();
		console.log(data);
		return data;
	}

	function showDateTimeModal(e) {
		title = e.target.textContent;
		visible_datetime_modal = true;
	}

	function setDateTime({ detail }) {
		console.log(detail);
		params.date = detail.selected_date.split('-').reverse().join();
		params.time = detail.selected_time.replace(':', '');
		params.timeIs = detail.mode === 'Departure' ? 'departing' : 'arriving';

		btn_time_title_text = `${detail.mode}: ${detail.selected_date} ${detail.selected_time}`;

		visible_datetime_modal = false;
	}

	async function expectedTime(legs) {
		const leg_with_station = legs.find((leg) => leg.mode.id != 'walking');

		if (!leg_with_station) return '';

		const line_id = leg_with_station.routeOptions[0].lineIdentifier.id;
		const station_naptanId = leg_with_station.departurePoint.naptanId; // or individualStopId

		// const res = await fetch(`https://api.tfl.gov.uk/StopPoint/${station_naptanId}/Arrivals`);
		const res = await fetch(`https://api.tfl.gov.uk/Line/${line_id}/Arrivals/${station_naptanId}`);

		if (res.ok) {
			const data = await res.json();

			data.sort((a, b) => a.timeToStation - b.timeToStation);

			const first_three = data.slice(0, 3);

			let times = '';
			first_three.forEach(({ timeToStation }) => {
				if (times !== '') times += ', ';
				times += timeToStation <= 30 ? 'now' : (timeToStation / 60).toFixed(0);
			});

			return times + 'mins';
		} else {
			return '';
		}
	}
</script>

{#if visible_datetime_modal}
	<ModalDateTime
		on:closeModal={() => {
			visible_datetime_modal = false;
		}}
		on:accept={setDateTime}
		{title}
	/>
{/if}

<header class="overmap-controls">
	<button class="btn-reload circle-control">
		<img src="/img/icon-buttons/reload.svg" alt="Reload Icon" class="btn-reload__icon btn-icon" />
	</button>
	<label for="ckbDisplayerTimeOptions" class="btn-time circle-control">
		<span class="btn-time__title">
			<img
				src="/img/icon-buttons/clock.svg"
				alt="Clock icon"
				class="btn-time__title__icon btn-icon"
			/>
			<span class="btn-time__title__text">{btn_time_title_text}</span>
		</span>
		<input type="checkbox" id="ckbDisplayerTimeOptions" />
		<div class="time-options-container">
			<button class="time-option time-option-now">Now</button>
			<button class="time-option time-option-arrival" on:click={showDateTimeModal}
				>Arrival time</button
			>
			<button class="time-option time-option-departure" on:click={showDateTimeModal}
				>Departure time</button
			>
		</div>
	</label>
</header>

<Map />
<main class="app-main-container">
	<div class="navigation-container">
		<LocationCard data={location_origin} />
		<button class="btn-switch-direction small-button">
			<img src="/img/icon-buttons/reverse-arrow.svg" alt="Reverse icon" />
		</button>
		<LocationCard data={location_destiny} />
	</div>

	<div class="suggestions-container">
		<p class="title">Suggestions</p>
		{#await getSuggestions()}
			<Loading dot_color="white" />
		{:then suggestion}
			{#if suggestion.$type.includes('DisambiguationResult')}
				<p>Parece que no estas en Londes</p>
			{:else}
				<div class="suggestion-cards">
					{#each suggestion.journeys as journey}
						<div class="suggestion">
							<div class="suggestion__travel-info">
								<div class="travel-steps non-scroll-bar">
									{#each journey.legs as leg}
										{#if (leg.duration >= 10 && leg.mode.id === 'walking') || leg.mode.id !== 'walking'}
											{@const step_name = leg.routeOptions[0].name}
											<div class="travel-step">
												<img src="/img/transport/{leg.mode.id}.svg" alt="en {leg.mode.id} icon" />
												<span style={!step_name || leg.mode.id !== 'bus' ? 'display: none' : ''}
													>{step_name}</span
												>
											</div>
											<div class="travel-step-separator" />
										{/if}
									{/each}
								</div>
								{#if journey.fare}
									<span class="travel-price">£{journey.fare.totalCost / 100}</span>
								{/if}
								<span class="travel-duration">
									{journey.duration}<span class="subtext">min</span>
								</span>
							</div>
							<div class="suggestion__detail-info">
								<span class="arrival-times">
									{#await expectedTime(journey.legs)}
										<span>Loading times...</span>
									{:then times}
										{times}
									{/await}
								</span>
								<span class="departure-station">
									{journey.legs[0].arrivalPoint.commonName}
									{journey.legs[0].arrivalPoint.platformName}
								</span>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		{:catch error}
			<p>{error}</p>
		{/await}
	</div>
</main>

<style>
	/* Header Overmap Controls */
	.overmap-controls {
		position: fixed;
		top: 0;
		z-index: 20;
		width: 100%;
		padding: 10px 10px 0 0;
		display: flex;
		justify-content: end;
		align-items: flex-start;
		gap: 15px;
	}

	.circle-control {
		border-radius: 100vmax;
		border: 1px solid var(--clr-grey-border);
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

		padding: 5px;
		background-color: #fff;
	}

	.btn-reload {
		--btn-size: 40px;
		width: var(--btn-size);
		height: var(--btn-size);
	}

	.btn-time {
		display: inline-flex;
		flex-direction: column;
		text-align: left;
		border-radius: 20px;
		transition: height 2s;
	}

	.btn-time__title {
		--btn-size: calc(40px - 10px); /* 5px top and bottom */

		display: inline-flex;
		align-items: center;
		gap: 10px;
		height: var(--btn-size);
		padding: 0 10px;
	}

	#ckbDisplayerTimeOptions,
	.time-options-container {
		display: none;
	}

	#ckbDisplayerTimeOptions:checked + .time-options-container {
		display: flex;
	}
	.btn-icon {
		height: 100%;
	}

	.time-options-container {
		flex-direction: column;
		align-items: flex-start;
		padding-left: 10px;

		border-top: 1px solid var(--clr-grey-border);
		margin-top: 5px;
	}

	.time-option {
		background: none;
		border: none;
		font-size: 1rem;
		padding: 5px 0;
	}

	/* Body Page */
	.navigation-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 495px;
		margin: 0 auto;
		padding: 20px 0;
	}

	.small-button {
		display: flex;
		align-items: center;
		align-self: flex-end;
		margin: -10px 0;
		margin-right: 30px;
		padding: 8px;
		width: fit-content;
		height: fit-content;

		background-color: var(--clr-grey);
		border: 1px solid var(--clr-grey-border);
		border-radius: 5px;
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
	}

	.btn-switch-direction {
		flex-direction: row;
		transform: rotate(90deg);
	}

	/* Suggestions */

	.suggestions-container {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}
	.title {
		color: var(--clr-bright-text);
	}

	.suggestion-cards {
		background-color: #fff;
		border-radius: 12px;
	}

	.suggestion {
		padding: 15px 10px;
		border-bottom: 2px solid var(--clr-grey-border);
	}

	.suggestion:nth-last-child(1) {
		border-bottom: none;
	}

	.suggestion__travel-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
		margin-bottom: 10px;
	}

	.travel-steps {
		display: flex;
		align-items: center;
		flex-grow: 3;
		gap: 5px;
		max-width: 50%;
	}

	.travel-step {
		border: 1px solid rgb(172, 172, 172);
		padding: 5px 5px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}

	.travel-step-separator {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 100vmax;
		background-color: #444;
	}

	.travel-step-separator:nth-last-child(1) {
		display: none;
	}

	.travel-price,
	.travel-duration {
		font-size: 1.13rem;
	}

	.subtext {
		font-size: 0.9rem;
	}

	.suggestion__detail-info {
		font-weight: 500;
	}

	.departure-station {
		color: gray;
	}

	@media screen and (min-width: 800px) {
		.navigation-container {
			max-width: 1000px;
			flex-direction: row;
			gap: 20px;
		}

		.btn-switch-direction {
			transform: none;
			margin: 0;
			align-self: center;
		}
	}
</style>
