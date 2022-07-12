<script>
	import { createEventDispatcher } from 'svelte';
	export let routeLegs;
	let slide;
	const dispatch = createEventDispatcher();

	function goBack() {
		dispatch('goBack', {});
	}
</script>

<div class="route-container">
	<button class="back-btn" on:click={goBack}>atras</button>
	<ul
		class="legs-container"
		style="width: calc(100% * {routeLegs.length}); transform: translate(calc(-100% / {routeLegs.length} * {slide}));"
	>
		{#each routeLegs as leg, index}
			<li class="leg">
				<div class="leg-header">
					<button class="left" on:click={() => (slide = index - 1)}
						><img src="left-simple-arrow.svg" alt="Left" /></button
					>
					<h3 class="leg-header__title">
						<img src="{leg.mode.id}.svg" alt="{leg.mode.name} icon" />{leg.instruction.detailed}
					</h3>
					<button class="right" on:click={() => (slide = index + 1)}
						><img src="right-simple-arrow.svg" alt="Right0" /></button
					>
				</div>
				<div class="leg__steps-container">
					{#each leg.instruction.steps as step}
						<p class="step">
							<img
								class="step__icon"
								src="{step.turnDirection.toLowerCase()}.svg"
								alt={step.turnDirection}
							/><span class="step__description">{step.description}</span>
						</p>
					{:else}
						<div class="stop-point-container">
                            <div class="location-point"></div>
							{#each leg.path.stopPoints as stopPoint}
								<p class="step stop-point"><span class="stop-point__location"></span>{stopPoint.name}</p>
							{/each}
						</div>
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.route-container {
		padding: 10px 0;
		overflow: hidden;
	}

	/* Back button */
	.back-btn {
		background: none;
		border: none;
		color: cadetblue;
		font-weight: bold;
		font-size: 1rem;
		margin-left: 2rem; /* 1rem added for margin */
		position: relative;
	}

	.back-btn::after,
	.back-btn::before {
		content: '';
		position: absolute;
		left: -1rem;
		width: 0.8em;
		height: 0.2em;
		background-color: cadetblue;
		border-radius: 12px;
	}

	.back-btn::after {
		transform: rotate(-45deg);
		top: 0.23em;
	}
	.back-btn::before {
		transform: rotate(45deg);
		bottom: 0.23em;
	}
	.back-btn:hover {
		color: #309194;
	}
	.back-btn:hover::after,
	.back-btn:hover::before {
		background-color: #309194;
	}

	/* List of legs */
	ul.legs-container {
		margin-top: 20px;
		list-style: none;
		overflow: visible;
		display: flex;
		transition: transform 0.6s ease-in-out;
	}

	li.leg {
		padding-bottom: 15px;
		width: 100%;
		max-width: 100vw;
	}

	.leg-header {
		box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.2);
		margin-bottom: 20px;
		display: grid;
		grid-template-columns: 10% auto 10%;
		column-gap: 10px;
		padding: 0 5px;
	}

	.leg-header__title {
		margin: 10px 0;
		font-size: 1.1rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	li.leg button {
		height: 100%;
		border: none;
		background: none;
	}

	.leg-header__title img {
		max-width: 1.2rem;
		max-height: 1.2rem;
		margin-right: 10px;
	}

	li.leg:nth-child(1) button.left,
	li.leg:nth-last-child(1) button.right {
		visibility: hidden;
	}

	/* Steps of the legs */
	.leg__steps-container {
		padding-left: 20px;
	}

	.step {
		margin: 5px 0;
		display: flex;
		align-items: center;
	}
	.step__icon {
		vertical-align: middle;
		height: 100%;
	}
	
    /* Steps of Stops Point */

    .stop-point-container{
        height: fit-content;
        position: relative;
    }

    .location-point,
    .stop-point__location{
        width: 1rem;
        height: 1rem;
        border-radius: 50%; 
        box-sizing: content-box;
    }
    
    .location-point{
        position: absolute;
        background-color: #7068e9;
        box-shadow: 0 0 20px #2c21b991;
        margin: calc(0.625rem + 2px) 0; /* Adjust for the border of .stop-point__location and padding of .stop-point */
        left: 2px; /* Adjust for the border of .stop-point__location*/
        z-index: 2;

        transition: top .5s ease-in-out;
    }
    
    .stop-point{
        padding: 0.625rem 0;
        position: relative;
        margin: 0;
    }
    
    .stop-point__location{
        border: 2px solid black;
        border-radius: 50%;
        margin-right: 5px;
        background-color: #fff;
    }

    .stop-point::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 2px;;
        background-color: black;
        /* margin to center en the .stop-point__location */
        margin-left: calc(1rem / 2 + 2px); 
        transform: translate(-50%);

        z-index: -1;
    }

    

</style>
