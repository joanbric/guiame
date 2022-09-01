<script context="module">
 
    export async function load({session}){
        if(!session.authenticated)
        return {
            status: 302,
            redirect: "/login"
        }

        return {
            props:{
                email: session.user.email,
                name: session.user.name,
            }
        }
    }
</script>
<script>
    import Map from '../../components/map.svelte';
	let cur_pos = [51.49164814536886, -0.10065042998557304];
</script>

<Map {cur_pos} />

<div class="app-main-container">
	<div class="main-controls">
        <div class="origin">
            <div class="origin__label-container">
                <img src="/img/icon-buttons/search.svg" alt="search icon" class="origin__icon" />
				<label for="origin" class="origin__label">Origin</label>
			</div>
			<input type="search" name="origin" id="txtOrigin" class="origin__input" />
		</div>
		<div class="destiny">
            <div class="destiny__label-container">
                <img src="/img/icon-buttons/search.svg" alt="search icon" class="destiny__icon" />
				<label for="destiny" class="destiny__label">Destiny</label>
			</div>
			<input type="search" name="destiny" id="txtDestiny" class="destiny__input" placeholder="Where you want to go?" />
		</div>
	</div>
    
    <input class="radio-history radio-menu" type="radio" name="menu-item" id="ckbHistory" checked />
    <input class="radio-favorite radio-menu" type="radio" name="menu-item" id="ckbFavorite" />
    <input class="radio-schedule radio-menu" type="radio" name="menu-item" id="ckbSchedule" />

	<div class="menu">
		<label for="ckbHistory" class="menu__icon-container menu__history">
			<svg
				class="menu__icon"
				width="40"
				height="37"
				viewBox="0 0 40 37"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.31747 16.4656C8.25398 16.9089 8.25398 17.2888 8.25398 17.7321H4.44446C4.44446 17.2888 4.44446 16.9089 4.50795 16.4656H8.31747Z"
					fill="black"
				/>
				<path
					d="M23.1746 8.86607H21.2699C20.7619 8.86607 20.3175 9.30938 20.3175 9.81601V18.1121C20.3175 18.3654 20.4445 18.6187 20.5714 18.8087L25.9048 24.1284C26.2857 24.5083 26.8572 24.5083 27.2381 24.1284L28.5714 22.7985C28.9524 22.4185 28.9524 21.8485 28.5714 21.4686L24.127 16.9722V9.81601C24.127 9.30938 23.6826 8.86607 23.1746 8.86607Z"
					fill="black"
				/>
				<path
					d="M22.2222 0C12.8254 0 5.14286 7.28284 4.50794 16.4656C4.50794 16.6555 4.44445 16.9089 4.44445 17.0988H1.58731C0.761909 17.0988 0.317464 18.0488 0.825401 18.6187L5.58731 24.3817C5.96826 24.825 6.66667 24.825 7.04762 24.3817L11.8095 18.6187C12.3175 17.9855 11.873 17.0988 11.0476 17.0988H8.25397C8.25397 16.9089 8.25397 16.6555 8.25397 16.4656C8.88889 9.3727 14.9206 3.79974 22.1587 3.79974C30.4127 3.79974 36.9524 10.9559 36.0635 19.3154C35.4286 25.3316 29.7143 31.0312 23.6191 31.6012C19.1111 32.0445 14.8571 30.3979 11.873 27.1682C11.4921 26.7249 10.9841 26.4715 10.4762 27.1048L8.95238 28.9414C8.63492 29.3214 8.88889 29.5747 9.20635 29.8913C12.6349 33.5011 17.3333 35.5276 22.4127 35.4643C31.5556 35.3376 39.2381 28.1181 39.873 18.9987C40.6984 8.67608 32.4444 0 22.2222 0Z"
					fill="black"
				/>
			</svg></label
		>
		<label for="ckbFavorite" class="menu__icon-container menu__favorite"
			><svg
				class="menu__icon"
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 55.867 55.867"
				style="enable-background:new 0 0 55.867 55.867;"
				xml:space="preserve"
			>
				<path
					d="M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558
	                    s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024
	                    l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506
	                    c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017
	                    l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z"
				/>
			</svg>
		</label>
		<label for="ckbSchedule" class="menu__icon-container menu__schedule"
			><svg
				class="menu__icon"
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 357.583 357.583"
				style="enable-background:new 0 0 357.583 357.583;"
				xml:space="preserve"
			>
				<g>
					<path
						d="M351.119,27.479c-4.174-4.177-9.713-6.687-15.597-6.687H22.061c-5.884,0-11.423,2.51-15.597,6.687
               C2.29,31.655-0.005,37.301,0,43.186l0.229,271.361c0.011,12.165,9.917,22.245,22.083,22.245h312.958
               c12.167,0,22.073-10.027,22.082-22.192l0.23-271.348C357.588,37.366,355.293,31.655,351.119,27.479z M324.344,301.72
               c0,1.144-0.928,2.071-2.072,2.071H35.416c-1.145,0-2.072-0.927-2.072-2.071V115.863c0-1.144,0.928-2.071,2.072-2.071h286.855
               c1.145,0,2.072,0.927,2.072,2.071V301.72z"
					/>
					<path
						d="M71.344,196.792h33c8.272,0,15-6.729,15-15v-27c0-8.271-6.728-15-15-15h-33c-8.271,0-15,6.729-15,15v27
               C56.344,190.063,63.072,196.792,71.344,196.792z"
					/>
					<path
						d="M162.344,196.792h33c8.271,0,15-6.729,15-15v-27c0-8.271-6.729-15-15-15h-33c-8.271,0-15,6.729-15,15v27
               C147.344,190.063,154.072,196.792,162.344,196.792z"
					/>
					<path
						d="M254.344,196.792h33c8.271,0,15-6.729,15-15v-27c0-8.271-6.729-15-15-15h-33c-8.271,0-15,6.729-15,15v27
               C239.344,190.063,246.072,196.792,254.344,196.792z"
					/>
					<path
						d="M71.344,279.792h33c8.272,0,15-6.728,15-15v-27c0-8.271-6.728-15-15-15h-33c-8.271,0-15,6.729-15,15v27
               C56.344,273.063,63.072,279.792,71.344,279.792z"
					/>
					<path
						d="M162.344,279.792h33c8.271,0,15-6.728,15-15v-27c0-8.271-6.729-15-15-15h-33c-8.271,0-15,6.729-15,15v27
               C147.344,273.063,154.072,279.792,162.344,279.792z"
					/>
					<path
						d="M254.344,279.792h33c8.271,0,15-6.728,15-15v-27c0-8.271-6.729-15-15-15h-33c-8.271,0-15,6.729-15,15v27
               C239.344,273.063,246.072,279.792,254.344,279.792z"
					/>
				</g>
			</svg></label
		>
	</div>


	<div class="menu-content">
		<div class="menu-content__item history">
			<div class="item__group">
				<h2 class="group__title">24 horas</h2>
				<div class="group-content">
					<div class="history-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">Brit Hotel Elephant Castle</div>
							<div class="travel-info__addr">
								<span class="addr__concept">Address:</span> 35 Hampton st, London SE17 3AN, Reino Unido
							</div>
						</div>
					</div>

					<div class="history-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">Bixton, Londres, Reino Unido</div>
							<div class="travel-info__addr" />
						</div>
					</div>

					<div class="history-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">SW2 1JQ</div>
							<div class="travel-info__addr" />
						</div>
					</div>

					<div class="history-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">Canterbury Place, SE17 3AD</div>
							<div class="travel-info__addr">
								<span class="addr__concept">Address:</span> 35 Hampton St, London SE17 3AN, Reino Unido
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="item__group">
				<h2 class="group__title">7 Dias</h2>
				<div class="group-content">
					<div class="history-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">235 Finchley Rd, London, Reino Unido</div>
							<div class="travel-info__addr">
								<span class="addr__concept">Address:</span>
							</div>
						</div>
					</div>

					<div class="history-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">Canterbury Place, SE17 3AD</div>
							<div class="travel-info__addr" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="menu-content__item favorite">
			<div class="item__group">
				<div class="group-content">
					<div class="favorite-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">Brit Hotel Elephant Castle</div>
							<div class="travel-info__addr">
								<span class="addr__concept">Address:</span> 35 Hampton st, London SE17 3AN, Reino Unido
							</div>
						</div>
					</div>
					<div class="favorite-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">Trabajo</div>
							<div class="travel-info__addr" />
						</div>
					</div>
					<div class="favorite-travel">
						<img
							src="/img/icon-buttons/recent-location.svg"
							alt="Recent location icon"
							class="travel-img"
						/>
						<div class="travel-info">
							<div class="travel-info__name-place">Iglesia</div>
							<div class="travel-info__addr">
								<span class="addr__concept">Address:</span> 1 Northiam, London N12 7ET, Reino Unido
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="menu-content__item schedule">
			<div class="item__group">
				<h2 class="group__title">This week</h2>
				<div class="group-content">
					<div class="schedule-travel">
						<img src="/img/icon-buttons/calendar.svg" alt="Calendar icon" class="travel-img" />
						<div class="travel-info">
							<div class="travel-info__name-place">
								To <strong>Brit Hotel Elephant Castle</strong>
							</div>
							<div class="travel-info__addr">Arrive Wednesday, 25/07 at 12:50</div>
						</div>
					</div>

					<div class="schedule-travel">
						<img src="/img/icon-buttons/calendar.svg" alt="Calendar icon" class="travel-img" />
						<div class="travel-info">
							<div class="travel-info__name-place">
								To <strong>Bixton bus station</strong>
							</div>
							<div class="travel-info__addr">Arrive Thursday, 26/07 at 9:00</div>
						</div>
					</div>

					<div class="schedule-travel">
						<img src="/img/icon-buttons/calendar.svg" alt="Calendar icon" class="travel-img" />
						<div class="travel-info">
							<div class="travel-info__name-place">
								To <strong>Brit Hotel Elephant Castle</strong>
							</div>
							<div class="travel-info__addr">Arrive Thursday, 26/07 at 15:30</div>
						</div>
					</div>
				</div>
			</div>

			<div class="item__group">
				<h2 class="group__title">Next week</h2>
				<div class="group-content">
					<div class="schedule-travel">
						<img src="/img/icon-buttons/calendar.svg" alt="Calendar icon" class="travel-img" />
						<div class="travel-info">
							<div class="travel-info__name-place">
								To <strong>Work</strong>
							</div>
							<div class="travel-info__addr">Arrive Wednesday, 30/07 at 12:50</div>
						</div>
					</div>

					<div class="schedule-travel">
						<img src="/img/icon-buttons/calendar.svg" alt="Calendar icon" class="travel-img" />
						<div class="travel-info">
							<div class="travel-info__name-place">
								To <strong>Bixton bus station</strong>
							</div>
							<div class="travel-info__addr">Arrive Thursday, 31/07 at 9:00</div>
						</div>
					</div>

					<div class="schedule-travel">
						<img src="/img/icon-buttons/calendar.svg" alt="Calendar icon" class="travel-img" />
						<div class="travel-info">
							<div class="travel-info__name-place">
								To <strong>Brit Hotel Elephant Castle</strong>
							</div>
							<div class="travel-info__addr">Arrive Thursday, 31/07 at 15:30</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>

    .app-main-container{
            height: max-content;
            min-height: 55vh;
            padding-bottom: 15px;
    }
	/* *** Search input *** */
	.origin,
	.destiny {
		width: 100%;
		display: flex;
		justify-content: left;
        padding: 0 5px;
	}

	.origin__icon,
	.destiny__icon {
		width: 1.2rem;
	}

	.origin__label,
	.destiny__label,
	.origin__input,
	.destiny__input {
		font-size: 1rem;
	}
	.origin__label-container,
	.destiny__label-container {
		height: 100%;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
        gap: 5px;
	}
	.origin__input,
	.destiny__input {
		display: inline-block;
		border: none;
		outline: none;
		padding: 10px 5px;
		height: 100%;
        flex-grow: 2;
	}

	.origin {
		display: none;
	}

	
    /* *** Menu *** */

    .radio-history:checked ~ .menu .menu__history {
        background-color: #31556f;
    }

    .radio-history:not(:checked) ~ .menu-content .history{
        display: none;
    }

    .radio-favorite:checked ~ .menu .menu__favorite {
        background-color: #31556f;
    }
    .radio-favorite:not(:checked) ~ .menu-content .favorite{
        display: none;
    }
    .radio-schedule:checked ~ .menu .menu__schedule {
        background-color: #31556f;
    }
    .radio-schedule:not(:checked) ~ .menu-content .schedule{
        display: none;
    }
	.menu {
		width: 100%;
		max-width: 800px;
		margin: 20px auto;
		display: flex;
		justify-content: space-evenly;
	}

	.menu__icon-container {
		background-color: #3a6381;
		border-radius: 50%;
		padding: 10px;
		max-width: 50px;
		max-height: 50px;
	}

	.menu__icon {
		width: 100%;
		height: 100%;
	}

	.menu__icon path {
		fill: white;
	}

    .radio-menu{
        display: none;
    }


    /* *** Menu content *** */
    .menu-content{
        width: 95%;
        max-width: 800px;
        margin: 0 auto;
    }

    .item__group{
        margin-top: 15px;
    }

    .group__title{
        color: var(--clr-bright-text);
        font-size: 1rem;
    }

    .group-content{
        background-color: #fff;
        border-radius: 12px;
    }

    .history-travel,
    .favorite-travel,
    .schedule-travel{
        display: flex;
        padding: 5px 0;
        border-bottom: 1px solid gray;
    }
    .history-travel:nth-last-child(1),
    .favorite-travel:nth-last-child(1),
    .schedule-travel:nth-last-child(1){
        border: none;
    }

    .travel-img{
        max-width: 42px;
        max-height: 42px;
        margin: 0 15px;
    }

    .travel-info__name-place{
        font-size: 1rem;
    }

    .travel-info__addr{
        font-size: .8rem;
    }

    .addr__concept{
        font-weight: 500;
    }

</style>
