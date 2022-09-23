<script>
	export let lat = 1;
	export let lng = 1;

	export let label = 'Search';

	import { destination } from '$lib/store';
	import { session } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let suggestions = [];
	let search_criteria = '';

	function addressFinder(search_text) {

		const endpoint = 'mapbox.places';
		const parameter = [
			{ enable: true, name: 'access_token', value: $session.MAPBOX_TOKEN },
			{ enable: true, name: 'country', value: 'GB' },
			{ enable: false, name: 'proximity', value: `${lat},${lng}` }
		];
        if(search_text !== "") search_text += ", london"
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

	$:  {
        addressFinder(search_criteria).then(suggRes => {
            suggestions = suggRes.features;
        })
	};

	function selectLocation(suggest) {
		search_criteria = suggest.place_name;
		destination.set(suggest);
		suggestions = [];
		dispatch('locationSelected', suggest);
	}
</script>

<div class="search-input-container">
	<label for="txtLocation" class="label">
		<img
			src="/img/icon-buttons/search.svg"
			alt="Search icon"
			class="origin__icon label__icon search-icon"
		/>
		<span class="label__text">{label}</span>
	</label>
	<input
		type="search"
		autocomplete="off"
		name="destination"
		id="txtDestination"
		placeholder="Where you want to go?"
		bind:value={search_criteria}
		class="search-input"
	/>
	{#if suggestions.length !== 0}
		<ul class="suggestion-list">
			{#each suggestions as suggestion}
                {#if suggestion.place_name.includes("London")}
                    
				<li on:click={selectLocation(suggestion)}>
					<!-- <span class="location-name">{suggestion.place_name}</span> -->
					<span class="location-name">{suggestion.place_name.split(',')[0]}</span>,
					<span class="adrs-detail">{suggestion.place_name.split(',').slice(1).toString()}</span>
				</li>
                {/if}
			{/each}
		</ul>
	{/if}
</div>

<style>
	.search-input-container {
		position: relative;
		width: 100%;

		display: flex;
		justify-content: left;
		align-items: center;
		padding: 0 5px;
	}

	.label {
		height: 100%;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		gap: 5px;
	}

	.label__text {
		font-size: 1rem;
	}

	.label__icon {
		width: 1.2rem;
	}

	.search-input {
		border: none;
		outline: none;
		font-size: 1rem;
		padding: 6px 10px;
		flex-grow: 2;
	}

	.search-input,
	ul {
		margin: 5px 5px;
		border-radius: 8px;
		list-style: none;
	}

	ul {
		width: calc(100% - 5px * 2); /* Calculing the margin */
	}

	/* .search-input:active,
	.search-input:focus, */
	.suggestion-list {
		outline: 2px solid rgba(95, 158, 160, 0.5);
		box-shadow: 0 2px 15px rgba(95, 158, 160, 0.8);
	}
	.search-input:focus + .suggestion-list {
		display: block;
	}

	.suggestion-list {
		width: calc(100% + 10px); /* 5px * 2 of padding in .search-input-container */
		display: none;
		position: absolute;
		top: 110%;
		left: 50%;
		transform: translateX(calc(-50% - 5px)); /* 5px of padding in .search-input-container */
		z-index: 100;
		background-color: white;
	}

	.suggestion-list:hover {
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
