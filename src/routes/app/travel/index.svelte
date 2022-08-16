<script>
	import Map from '../../components/map.svelte';
	let cur_pos = [51.49164814536886, -0.10065042998557304];
    let stops_hidden = true;
</script>

<div class="overmap-controls">
	<button class="overmap-control overmap-small-btn btn-back"><svg class="control__icon" width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1387 4.46473C14.9294 3.68207 14.9294 2.40459 14.1387 1.62193L14.0351 1.51938C13.2557 0.747915 12.0005 0.747916 11.2211 1.51938L1.43597 11.2053C0.645285 11.9879 0.645285 13.2654 1.43597 14.0481L11.2211 23.7339C12.0005 24.5054 13.2557 24.5054 14.0351 23.7339L14.1387 23.6314C14.9294 22.8487 14.9294 21.5713 14.1387 20.7886L7.32908 14.0481C6.5384 13.2654 6.5384 11.9879 7.32908 11.2053L14.1387 4.46473Z" fill="#686B6F"/>
        </svg>
        </button>
	<button class="overmap-control overmap-small-btn btn-add-schedule"><svg class="control__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_109_1037)">
        <path d="M24.5481 1.92116C24.2563 1.62913 23.869 1.45364 23.4576 1.45364H1.54237C1.131 1.45364 0.743744 1.62913 0.451924 1.92116C0.160103 2.21312 -0.000348999 2.60785 5.69987e-07 3.01929L0.0160108 21.9912C0.0167799 22.8417 0.709346 23.5464 1.55992 23.5464H23.44C24.2907 23.5464 24.9832 22.8454 24.9838 21.9949L24.9999 3.02391C25.0003 2.6124 24.8399 2.21312 24.5481 1.92116ZM22.6761 21.0944C22.6761 21.1744 22.6113 21.2392 22.5313 21.2392H2.47607C2.39602 21.2392 2.33121 21.1744 2.33121 21.0944V8.10042C2.33121 8.02044 2.39609 7.95563 2.47607 7.95563H22.5312C22.6113 7.95563 22.6761 8.02044 22.6761 8.10042V21.0944H22.6761Z" fill="black"/>
        <path d="M4.98792 13.7585H7.29507C7.8734 13.7585 8.34378 13.288 8.34378 12.7098V10.8221C8.34378 10.2438 7.8734 9.77339 7.29507 9.77339H4.98792C4.40966 9.77339 3.93921 10.2438 3.93921 10.8221V12.7098C3.93921 13.288 4.40959 13.7585 4.98792 13.7585Z" fill="black"/>
        <path d="M11.35 13.7585H13.6571C14.2354 13.7585 14.7058 13.288 14.7058 12.7098V10.8221C14.7058 10.2438 14.2354 9.77339 13.6571 9.77339H11.35C10.7717 9.77339 10.3013 10.2438 10.3013 10.8221V12.7098C10.3013 13.288 10.7716 13.7585 11.35 13.7585Z" fill="black"/>
        <path d="M17.7821 13.7585H20.0893C20.6675 13.7585 21.138 13.288 21.138 12.7098V10.8221C21.138 10.2438 20.6675 9.77339 20.0893 9.77339H17.7821C17.2038 9.77339 16.7334 10.2438 16.7334 10.8221V12.7098C16.7334 13.288 17.2038 13.7585 17.7821 13.7585Z" fill="black"/>
        <path d="M4.98792 19.5613H7.29507C7.8734 19.5613 8.34378 19.0909 8.34378 18.5126V16.6249C8.34378 16.0467 7.8734 15.5762 7.29507 15.5762H4.98792C4.40966 15.5762 3.93921 16.0467 3.93921 16.6249V18.5126C3.93921 19.0909 4.40959 19.5613 4.98792 19.5613Z" fill="black"/>
        <path d="M11.35 19.5613H13.6571C14.2354 19.5613 14.7058 19.0909 14.7058 18.5126V16.6249C14.7058 16.0467 14.2354 15.5762 13.6571 15.5762H11.35C10.7717 15.5762 10.3013 16.0467 10.3013 16.6249V18.5126C10.3013 19.0909 10.7716 19.5613 11.35 19.5613Z" fill="black"/>
        <path d="M17.7821 19.5613H20.0893C20.6675 19.5613 21.138 19.0909 21.138 18.5126V16.6249C21.138 16.0467 20.6675 15.5762 20.0893 15.5762H17.7821C17.2038 15.5762 16.7334 16.0467 16.7334 16.6249V18.5126C16.7334 19.0909 17.2038 19.5613 17.7821 19.5613Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_109_1037">
        <rect width="25" height="25" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </button>
        <button class="overmap-control overmap-small-btn btn-add-favorite"><svg class="control__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.978 9.65597C24.9252 9.49398 24.7851 9.37584 24.6164 9.35123L16.5213 8.17478L12.9011 0.839498C12.8259 0.686456 12.6702 0.589798 12.5001 0.589798C12.3301 0.589798 12.1739 0.686456 12.0992 0.839498L8.47852 8.17522L0.383402 9.35168C0.214698 9.37629 0.0750808 9.49398 0.0218293 9.65642C-0.0305272 9.81796 0.0128794 9.99607 0.135045 10.1147L5.99315 15.8246L4.60996 23.8875C4.58132 24.0553 4.65023 24.2249 4.78761 24.3252C4.92589 24.4263 5.10891 24.4393 5.25882 24.3592L12.5001 20.5528L19.7405 24.3592C19.8059 24.3937 19.8779 24.4107 19.9491 24.4107C20.0417 24.4107 20.1339 24.382 20.2122 24.3252C20.35 24.2249 20.4189 24.0553 20.3898 23.8875L19.0071 15.8251L24.8652 10.1147C24.9869 9.99517 25.0308 9.81752 24.978 9.65597Z" fill="black"/>
            </svg>
            </button>
</div>
<Map class="map" {cur_pos} />

<main class="app-main-container">
    <button class="btn-go overmap-control">Go <img src="/img/icon-buttons/rocket.svg" alt="Rocket icon"></button>
	<div class="content-header">
		<span class="header__steps-route">
			<span class="header__step"
				><img class="header__step-icon" src="/img/transport/walking.svg" alt="Walking icon" /><span
					class="step__text"
				/>4<span class="subtext">min</span></span
			><span class="header__step"
				><img class="header__step-icon" src="/img/transport/bus.svg" alt="Bus icon" /><span
					class="step__text header__step-text-strong"
				/>148</span
			><span class="header__step"
				><img class="header__step-icon" src="/img/transport/walking.svg" alt="Walking icon" /><span
					class="step__text"
				/>10<span class="subtext">min</span></span
			>
		</span>

		<span class="header__price">£1.65</span>

		<span class="header__time">
			47<span class="subtext">min</span>
		</span>
	</div>

	<div class="steps">
		<div class="step step-walking">
			<div class="step__header">
				<img src="/img/transport/walking-blue.svg" alt="walking icon" class="step__icon" />
				<span class="step__title"
					>Camina hasta <span class="title__station-name"
						><span class="bus-sub-station">Z</span> Heygate Street</span
					></span
				>
				<span class="step__time">4<span class="subtext">min</span></span>
			</div>
		</div>
		<div class="step detailed-step">
			<div class="step__header">
				<img src="/img/transport/bus.svg" alt="Bus icon" class="step__icon" />
				<span class="step__title">148</span>
				<span class="step__time">Cada 10 min<img src="/img/icon-buttons/right-simple-arrow.svg" alt="" class="step__detail-link-icon"></span>
				
			</div>
            <div class="step__content step__arrivals">
                <ul>
                    <li class="arrival"><span class="arrival__transport-name">White City</span> <span class="arrival__time">3<span class="subtext">min</span></span></li>
                    <li class="arrival"><span class="arrival__transport-name">White City</span> <span class="arrival__time">24<span class="subtext">min</span></span></li>
                    <li class="arrival"><span class="arrival__transport-name">White City</span> <span class="arrival__time">27<span class="subtext">min</span></span></li>
                    <li class="arrival"><span class="arrival__transport-name">White City</span> <span class="arrival__time">13:06</span></li>
                    <li class="arrival"><span class="arrival__transport-name">White City</span> <span class="arrival__time">13:16</span></li>
                </ul>
            </div>
		</div>

		<div class="step substeps">
            <div class="substep__start-stop">
                <span class="bus-sub-station">Z</span>
                <span class="stop__name">Heygate Street</span>
            </div>
            <div class="substeps stops">
                <div class="stops__header">
                    <button class="btn-stops-switch" on:click={()=>{stops_hidden = !stops_hidden}}><img class:reverse={stops_hidden} src="/img/icon-buttons/down-simple-arrow.svg" alt="Down arrow">16 paradas</button>
                    <span class="stops__time">39<span class="subtext">min</span></span>
                </div>
                <div class="stops__list" class:hidde={stops_hidden}>
                    <ul>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                        <li class="stop">Elephant & Castle Station</li>
                    </ul>
                </div>
            </div>
            <div class="substep__end-stop">
                <span class="bus-sub-station">T</span>
                <span class="stop__name">Dorchester Hotel</span>
            </div>
        </div>
		<div class="step step-walking">
			<div class="step__header">
				<img src="/img/transport/walking-blue.svg" alt="walking icon" class="step__icon" />
				<span class="step__title"
					>Camina hasta <span class="title__station-name"
						><span class="sub-station">Z</span> Hyde Park</span
					></span
				>
				<span class="step__time">4<span class="subtext">min</span></span>
			</div>
		</div>
	</div>
</main>


<style>
    .app-main-container{
        background-color: #eee;
    }
    .overmap-controls{
        position: fixed;
        top: 0;
        z-index: 5;

        width: 100%;
        padding: 15px 15px 0 15px;
    }

    .overmap-small-btn{
        width: 2.5rem;
        height: 2.5rem;
        padding: 8px;
    }
    .overmap-control{
        border: none;
        outline: none;
        border-radius: 100vmax;
        background-color: white;
        box-shadow: 0 0 12px rgba(0, 0, 0, .4);
    }

    .btn-add-favorite,
    .btn-add-schedule,
    .btn-go{
        float: right;
        margin-left: 20px;
    }

    .control__icon{
        width: 100%;
        height: 100%;
    }

    .btn-go{
        display: inline-flex;
        align-items: center;
        gap: 5px;
        
        position: sticky;
        top: calc(15px + 2.5rem + 25px + 15px); /* 15px margin top control + 2.5rem height of the first control */
        float: right;
        transform: translateY(-25px); 
        
        width: auto;
        height: 50px;
        padding: 5px 15px;
        
        font-size: 2rem;
        font-weight: 600;

        animation: jumping 5s ease-in-out infinite;
    }

    @keyframes jumping {
	from,
	10%,
	20%,
	to {
		transform: translateY(-25px) scale(1);
        box-shadow: 0 0 12px rgba(0, 0, 0, .4);
	}

	5%,
	15% {
        transform: translateY(-25px) scale(1.1);
        box-shadow: 0 0 20px rgba(0, 0, 0, .6);
	}
}

    /* *** Header *** */
    .content-header{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px 0;
        max-width: 600px;
        min-width: 360px;
        margin: 0 auto;
    }

    .header__steps-route{
        display: inline-flex;
        justify-content: space-between;
        gap: 8px;
    }

    .header__step{
        display: inline-flex;
        justify-content: center;
        background-color: white;
        border: 1px solid #D8D8D8;
        border-radius: 6px;
        padding: 5px 8px;
    }
    .header__step-icon{
        height: 100%;
    }

    .header__step-text-strong{
        font-weight: 500;
    }

    .header__time{
        font-size: 1.3rem;
    }

    /* *** Steps *** */

    .bus-sub-station{
        background-color: var(--clr-red);
        color: var(--clr-bright-text);
        padding: 0 5px;
        border-radius: 6px;
    }

    .step{
        background-color: white;
        margin: 15px auto;
        border-radius: 12px;
        padding:  10px 15px;

        max-width: 800px;

    }
    
    .step__header,
    .substep__start-stop,
    .substep__end-stop{
        padding: 5px 10px;
        font-weight: 500;
    }

    .step-walking .step__title{
        color: var(--clr-blue-text);
    }

    .step__time{
        float: right;
        display: flex;
        align-items: center;
        padding: 3px;
        gap: 2px;
    }

    .step__content{
        background-color: var(--clr-grey);
        border: 1px solid var(--clr-grey-border);
        border-radius: 6px;
    }

    .arrival{
        padding: 6px 10px;
        display: flex;
        justify-content: space-between;

    }

    .arrival__transport-name::before{
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border: 2px solid grey;

        margin: 0 5px;
        border-radius: 100vmax;
    }

    .arrival:nth-child(1) .arrival__transport-name::before{
        background-color: rgb(32, 220, 253);  
        box-shadow: 0 0 12px rgba(32, 220, 253, .7), 0 0 4px rgba(32, 220, 253, .5);
    }

    .stops__header{
        display: flex;
        justify-content: space-between;
    }
    .stops__list{
        overflow: hidden;
    }

    .stops{
        padding: 10px 0;
    }
    .btn-stops-switch{
        background: none;
        border: none;
        color: var(--clr-red);
        font-size: .9rem;

        display: inline-flex;
        align-items: center;
        gap: 5px;

        padding: 15px 0;
        margin-left: 25px;
        position: relative;
    }

    .btn-stops-switch::before,
    .stop::before,
    .stop::after{
        content: '';
        position: absolute;
        left: -10px;
        background-color: var(--clr-red);
        border-radius: 1vmax;
    }
    
    .btn-stops-switch::before,
    .stop::before{
        width: .25rem;
        height: 125%;

    }

    .stop::after{
        width: .5rem;
        height: .25rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .stop{
        padding: 5px 0;
        position: relative;
        margin-left: 25px
    }




    .hidde{
        height: 0;
    }

    .reverse{
        transform: rotateX(180deg);
    }
</style>