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
	<div class="route-content">
		<span class="duration-travel">{journey.duration}<br/>min</span>
		<span class="legs-travel">
			{#each journey.legs as leg}
				<span class="leg">
					<img src="{leg.mode.id}.svg" alt="{leg.mode.name} icon" />
					<span class="duration-leg">{leg.duration}min</span>
				</span>
			{/each}
		</span>
		<span class="cost-travel">{journey.fare ? journey.fare.totalCost / 100 : 0}</span>
	</div>
</button>

<style>
	/* ROUTES LISTED */
	button.route-link {
		width: calc(100% - 5px * 2);
		height: fit-content;
		display: flex;
		align-items: center;
		margin: 10px 5px;
		background-color: inherit;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
		border-radius: 5px;
		border: none;
	}

	div.route-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: inherit;
		background-color: transparent;
		padding: 5px 15px;
		overflow: hidden;
	}

    span.duration-travel, span.cost-travel{
        display: flex;
        font-size: 1.15rem;
        font-weight: 500;
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
