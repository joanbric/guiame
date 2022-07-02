<script>
	import { createEventDispatcher } from 'svelte';
	export let journey;

	const dispatch = createEventDispatcher();

	function journeySelected(journey) {
		dispatch('journeySelected', {
			journey
		});
	}
</script>

<button on:click={() => journeySelected(journey)} class="route-link">
	<li class="route-content">
		<span class="duration-travel">{journey.duration}min</span>
		<span class="legs-travel">
			{#each journey.legs as leg}
				<span class="leg">
					<img src="{leg.mode.id}.svg" alt="{leg.mode.name} icon" />
					<span class="duration-leg">{leg.duration}min</span>
				</span>
			{/each}
		</span>
		<span class="cost-travel">{journey.fare ? journey.fare.totalCost / 100 : 0}</span>
	</li>
</button>

<style>
	/* ROUTES LISTED */
	button.route-link {
		width: calc(100% - 5px * 2);
		height: fit-content;
		display: flex;
		align-items: center;
		margin: 10px 5px;
		background-color: #a7a7a7;
		border-radius: 5px;
		padding-left: 5px;
		border: none;
	}

	li.route-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: inherit;
		background-color: transparent;
		padding: 5px 15px;
		overflow: hidden;
	}

	span.legs-travel {
		display: flex;
		justify-content: space-around;
		height: inherit;
		flex-grow: 0;
	}

	span.legs-travel span.leg {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		row-gap: 2px;
		width: 2rem;
		margin: 0 10px;
	}

	img {
		width: 1.8rem;
		height: 1.8rem;
	}

	span.duration-leg {
		font-size: 0.8rem;
	}
</style>
