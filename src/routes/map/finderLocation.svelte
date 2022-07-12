<script>
	export let lat = 1;
	export let lng = 1;

	import { destination } from './store';

	let suggestions = [];
	let selected_place = '';
	function addressFinder(search_text) {
		let result;
		const endpoint = 'mapbox.places';
		const ACCESS_TOKEN =
			'sk.eyJ1Ijoiam9hbmJyaWMiLCJhIjoiY2wzNTY3NmZzMG9nbDNkcG93eDk2emN2NiJ9.upfHtZXNCEvBRgfiA-i-Bw';

		const parameter = [
			{ enable: true, name: 'access_token', value: ACCESS_TOKEN },
			{ enable: true, name: 'country', value: 'GB' },
			{ enable: true, name: 'proximity', value: `${lat},${lng}` }
		];
		let url = `https://api.mapbox.com/geocoding/v5/${endpoint}/${search_text}.json?`;

		parameter.forEach((param) => {
			if (param.enable) url = url.concat(param.name, '=', param.value, '&');
		});

		return fetch(url)
			.then((res) => {
				if (!res.ok) console.error(res);
				return res.json();
			})
			.then((data) => data)
			.catch((err) => err);
	}

	async function loadSuggestions(e) {
		const txtDestination = document.querySelector('#txtDestination');
		const suggRes = await addressFinder(txtDestination.value);
		suggestions = suggRes.features;
	}

	function selectLocation(suggest) {
		const txtDestination = document.querySelector('#txtDestination');
		txtDestination.value = suggest.place_name;
		destination.set(suggest);
		suggestions = [];
	}
</script>

<div class="input-container">
	<input
		on:input={loadSuggestions}
		type="search"
		autocomplete="off"
		name="destination"
		id="txtDestination"
		placeholder="Where you want to go?"
		value={selected_place}
	/>
	{#if suggestions.length !== 0}
		<ul style="suggestion-list">
			{#each suggestions as suggestion}
				<li on:click={selectLocation(suggestion)}>
					<!-- <span class="location-name">{suggestion.place_name}</span> -->
					<span class="location-name">{suggestion.place_name.split(',')[0]}</span>,
					<span class="adrs-detail">{suggestion.place_name.split(',').slice(1).toString()}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.input-container{
		position: relative;
	}

	input {
		border: none;
		outline: none;
		font-size: 1rem;
		padding: 6px 10px;
	}
	
	input,
	ul {
		width: calc(100% - 5px * 2); /* Calculing the margin */
		margin: 5px 5px;
		border-radius: 8px;
		list-style: none;
	}

	input:active,
	input:focus,
	ul {
		outline: 2px solid rgba(95, 158, 160, 0.5);
		box-shadow: 0 2px 15px rgba(95, 158, 160, 0.8);
	}
	input:focus + ul{
		display: block;
	}
	
	ul {
		display: none;
		position: fixed;
        z-index: 100;
		background-color: white;
	}
	ul:hover{
		display: block;
	}
	
	li {
		cursor: pointer;
		padding: 5px 10px;
	}
	li:hover {
		background-color: rgba(95, 158, 160, 0.1);
	}
	.location-name {
		font-weight: bold;
	}
	.adrs-detail {
		color: gray;
	}
</style>
