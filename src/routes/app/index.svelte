<script>
	import Map from '../components/map.svelte';
	let map;
	let cur_pos = [51.49164814536886, -0.10065042998557304];

	function onScroll(event) {
		console.log(event);
	}

	function controllerResize() {
		const mainContainer = document.querySelector('div.main-container');
		const map = document.querySelector('div#map');
		const mainContent = document.querySelector('main.app-main-container');
		const windowHeight = window.innerHeight;
		const fullHeight = document.body.clientHeight;
		const scrolled = window.scrollY;

		const percentScrolled = scrolled / (fullHeight - windowHeight);

		mainContainer.style.paddingTop = `${percentScrolled * 50}vh`;
		map.style.height = `${30 + (1 - percentScrolled) * 50}vh`;
		mainContent.style.height = `${20 + (percentScrolled) * 50}vh`;
	}

</script>

<svelte:window on:scroll={controllerResize} />

<svelte:body on:load={controllerResize} />
<div class="main-container">
	<Map class="map" {cur_pos} bind:this={map} />
	<main on:scroll={onScroll} class="app-main-container">
		<div class="main-controls">
			<a class="main-controls__control link-search non-decoration" href="app/search"
				><div class="control__icon" />
				<span>Where you go?</span>
			</a>

			<a class="main-controls__control link-home non-decoration" href="app/search?arrive=home">
				<div class="control__icon" />
				<span>Take me home</span>
			</a>

			<a class="main-controls__control link-work non-decoration" href="app/search?arrive=work">
				<div class="control__icon" />
				<span>Work</span>
			</a>

			<a class="main-controls__control link-diary non-decoration" href="app/search?menu=diary">
				<div class="control__icon" />
				<span>Diary</span>
			</a>

			<a class="main-controls__control link-sites non-decoration" href="app/search?menu=sites">
				<div class="control__icon" />
				<span>Sites</span>
			</a>
		</div>

		<div class="history-container">
			<h1 class="history-title">Viajes recientes</h1>

			<div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>

            <div class="travel-card">
				<div class="travel-card__header">
					<img class="header__icon" src="img/icon-buttons/recent.svg" alt="Recent icon" />
					<h2 class="header__title">Hasta Hewlett House</h2>
				</div>
				<div class="travel-card__content">
					<div class="travel-card__info">
						<div class="info__transport">
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="transport icon" />
								<span class="trans-item__info">196</span>
							</div>
							<div class="divisor" />
							<div class="travel-card__trans-item">
								<img src="img/transport/bus.svg" alt="Transport icon" />
								<span class="trans-item__info">196 / 344</span>
							</div>
						</div>
						<div class="trans-arrival-time">
							<h3 class="arrival-title">Llega</h3>
							<p class="arrival-time">19:33</p>
						</div>
					</div>
					<p class="frecuency">Cada 12min</p>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	/* *** Main Controls *** */
	.main-controls__control {
		position: relative;
		padding: 10px 5px;

		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;
	}

	.main-controls__control:hover {
		background-color: #d8d8d8;
		cursor: default;
	}

	.control__icon {
		width: 1.5rem;
		height: 1.5rem;
		background-size: cover;
		margin: 0 auto;
	}

	.link-search {
		padding: 15px 5px;
	}

	.link-search .control__icon,
	.link-home .control__icon {
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.link-search {
		border-bottom: 1px solid grey;
	}
	.link-home,
	.link-work,
	.link-diary {
		border-right: 1px solid grey;
	}

	.link-search .control__icon {
		background-image: url('img/icon-buttons/search.svg');
	}

	.link-home .control__icon {
		background-image: url('img/icon-buttons/house.svg');
	}

	.link-work .control__icon {
		background-image: url('img/icon-buttons/work-bag.svg');
	}

	.link-diary .control__icon {
		background-image: url('img/icon-buttons/calendar.svg');
	}

	.link-sites .control__icon {
		background-image: url('img/icon-buttons/favorite.svg');
	}

	/* *** History *** */

	.history-container {
		max-width: 800px;
		margin: 0 auto;
        height: 85%;
        overflow: auto;
        position: relative;
        background-color: inherit;
	}

    .history-container::-webkit-scrollbar{
        display: none;
    }
	.history-title {
		color: var(--clr-bright-text);
		font-size: 1.2rem;
        position: sticky;
        top: 0;
        background-color: inherit;
        z-index: 20;
	}

	.travel-card {
		border-radius: 12px;
		overflow: hidden;
        margin-bottom: 25px;
	}

	.travel-card__header {
		background-color: white;
		border-bottom: 1px solid gray;

		display: flex;
		align-items: center;
		padding-left: 5px;
	}

	.travel-card .header__icon {
		width: 3rem;
		height: 3rem;
	}

    .header__title{
        font-size: 1.1rem;
    }

	.travel-card__content {
		background-color: #f6f6f6;
		position: relative;
		padding: 30px 20px;
	}

    .travel-card__info{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

	.info__transport {
		display: flex;
        align-items: center;
		gap: 5px;

		width: max-content;
	}

	.travel-card__trans-item {
		background-color: white;
		border: 2px solid #d8d8d8;
		padding: 5px 5px;
		border-radius: 8px;
	}

    .divisor{
        background-color: #666;
        width: 10px;
        height: 10px;

        border-radius: 50%;
    }

    .trans-arrival-time{
        text-align: right;
        line-height: 1.3rem;
    }

    .arrival-title{
        font-size: 1rem;
    }

    .arrival-time{
        font-size: 1.6rem;
    }

    .frecuency{
        position: absolute;
        bottom: 0;
    }
</style>
