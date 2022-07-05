<script>
	import { createEventDispatcher } from 'svelte';
	export let routeLegs;

	const dispatch = createEventDispatcher();

	function goBack() {
		dispatch('goBack', {});
	}
</script>

<div class="legs-route">
	<button class="back-btn" on:click={goBack}>atras</button>
	<ul class="legs-container">
		{#each routeLegs as leg}
			<li class="leg">
				<h3 class="inst-detail__title">
					<img src="{leg.mode.id}.svg" alt="{leg.mode.name} icon" />{leg.instruction.detailed}
				</h3>
				<div class="leg__steps-container">
					{#each leg.instruction.steps as step}
						<p class="step">{step.description}</p>
					{:else}
						{#each leg.path.stopPoints as stopPoint}
							<p class="step">{stopPoint.name}</p>
						{/each}
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.legs-route {
		padding: 10px 0;
	}

	/* Back button */
	.legs-route button.back-btn {
		background: none;
		border: none;
		color: cadetblue;
		font-weight: bold;
		font-size: 1rem;
		margin-left: 1rem;
		position: relative;
	}
	.legs-route button.back-btn::after,
	.legs-route button.back-btn::before {
		content: '';
		position: absolute;
		left: -1rem;
		width: 0.8em;
		height: 0.2em;
		background-color: cadetblue;
		border-radius: 12px;
	}

	.legs-route button.back-btn::after {
		transform: rotate(-45deg);
		top: 0.23em;
	}
	.legs-route button.back-btn::before {
		transform: rotate(45deg);
		bottom: 0.23em;
	}
	.legs-route button.back-btn:hover {
		color: #309194;
	}
	.legs-route button.back-btn:hover::after,
	.legs-route button.back-btn:hover::before {
		background-color: #309194;
	}

	/* List of legs */
	ul.legs-container {
		margin-top: 20px;
		list-style: none;
		overflow: hidden;
	}

	ul.legs-container li.leg {
		/* padding: 15px 0; */
		padding-bottom: 15px;
	}

	ul.legs-container li.leg:hover {
		background-color: rgb(216, 216, 216);
	}
	ul.legs-container li.leg h3 {
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px -4px 8px rgba(0, 0, 0, 0.2);
		margin-bottom: 10px;
		padding: 10px 0 10px 20px;
	}

	ul.legs-container li.leg h3 img {
		max-width: 1.2rem;
		max-height: 1.2rem;
		margin-right: 10px;
	}

	/* Steps of the legs */
	.leg__steps-container {
		padding-left: 20px;
	}
</style>
