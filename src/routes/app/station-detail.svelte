
<script>
    let card = {
        title: 'Northbound'
    }


</script>

<header class="header">
    <img src="/img/transport/bus.svg" alt="Type transport icon" class="header__icon bus-icon">
    <div class="title-container">
        <h1 class="title">Heygate Street</h1>
        <p>hacia Waterloo or Westminster</p>
    </div>
</header>

<input type="radio" name="time-toggler" checked id="rbNowToggler" class="rb-time-toggler rb-now-toggler">
<input type="radio" name="time-toggler" id="rbTimeTableToggler" class="rb-time-toggler rb-timetable-toggler">
<div class="content">
    <div class="time-toggler-container">
        <div class="toggler-mark"></div>
        <label for="rbNowToggler" class="toggle toggle-label-now">Ahora</label>
        <label for="rbTimeTableToggler" class="toggle toggle-label-timetable">Horaios</label>
    </div>

    <div class="content__main">
        <div class="departures">
            <div class="departures__card">
                {#if card}
                <p class="card__title">
                    <strong>{card.title}</strong>
                </p>
                {/if}
                <div class="depart-card__card-item">
                    <img src="/img/transport/bus.svg" alt="Bus icon" class="card-item__icon">
                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">12</p>
                            <p class="info__transport__direction">Oxford Circus</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">Ahora</p>
                            <p class="info__time__other-depart">y en 6, 18, 28 min</p>
                        </div>
                    </div>
                </div>
                <div class="depart-card__card-item">
                    <img src="/img/transport/bus.svg" alt="Bus icon" class="card-item__icon">
                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">12</p>
                            <p class="info__transport__direction">Oxford Circus</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">Ahora</p>
                            <p class="info__time__other-depart">y en 6, 18, 28 min</p>
                        </div>
                    </div>
                </div>
                <div class="depart-card__card-item">
                    <img src="/img/transport/bus.svg" alt="Bus icon" class="card-item__icon">
                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">12</p>
                            <p class="info__transport__direction">Oxford Circus</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">Ahora</p>
                            <p class="info__time__other-depart">y en 6, 18, 28 min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="departures__card">
                {#if card}
                <div class="card__title">
                    <strong>{card.title}</strong>
                </div>
                {/if}
                <div class="depart-card__card-item">
                    <img src="/img/transport/bus.svg" alt="Bus icon" class="card-item__icon">
                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">12</p>
                            <p class="info__transport__direction">Oxford Circus</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">Ahora</p>
                            <p class="info__time__other-depart">y en 6, 18, 28 min</p>
                        </div>
                    </div>
                </div>
                <div class="depart-card__card-item">
                    <img src="/img/transport/bus.svg" alt="Bus icon" class="card-item__icon">
                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">12</p>
                            <p class="info__transport__direction">Oxford Circus</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">Ahora</p>
                            <p class="info__time__other-depart">y en 6, 18, 28 min</p>
                        </div>
                    </div>
                </div>
                <div class="depart-card__card-item">
                    <img src="/img/transport/bus.svg" alt="Bus icon" class="card-item__icon">
                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">12</p>
                            <p class="info__transport__direction">Oxford Circus</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">Ahora</p>
                            <p class="info__time__other-depart">y en 6, 18, 28 min</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="timetable">
            <div class="timetable-card">
                <div class="timetable-card__item card-item">

                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">68</p>
                            <p class="info__transport__direction">Euston</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">15:33</p>
                        </div>
                    </div>
                </div>
                <div class="timetable-card__item card-item">

                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">171</p>
                            <p class="info__transport__direction">Elephant & Castle</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">15:35</p>
                        </div>
                    </div>
                </div>
                <div class="timetable-card__item card-item">

                    <div class="card-item__info">
                        <div class="card-item__info__transport">
                            <p class="info__transport__code">12</p>
                            <p class="info__transport__direction">Oxford Circus</p>
                        </div>
                        <div class="card-item__info__time">
                            <p class="info__time__time-left">15:38</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    .header{
        display: flex;
        justify-content: center;
        gap: 10px;
        padding: 15px;
        margin-bottom: 15px;
    }
    .header__icon{
        width: 30px;
    }

    .rb-time-toggler{
        display: none;
    }

    .rb-now-toggler:checked ~ .content .toggler-mark{
        left: 0;
    }
    .rb-now-toggler:checked ~ .content .toggle-label-timetable,
    .rb-timetable-toggler:checked ~ .content .toggle-label-now{
        color: black;
    }
    .rb-timetable-toggler:checked ~ .content .toggler-mark{
        left: 50%;
    }

    .rb-now-toggler:not(:checked) ~ .content .departures,
    .rb-timetable-toggler:not(:checked) ~ .content .timetable{
        display: none;
    }
    

     .time-toggler-container{
        background-color: rgb(214, 214, 214);
        border-radius: 8px;
        position: relative;
        height: 3rem;
        max-width: 580px;
        margin: 20px auto; 

        display: flex;
        justify-content: space-around;
        align-items: center;

    }
    .toggler-mark{
        background-color: var(--clr-blue);
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50%;
        z-index: 1;
        border-radius: 8px;
        transition: left .2s ease-in-out;
        box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    }

    .toggle{
        font-size: 1.2rem;
        z-index: 10;
        color: white;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .departures__card,
    .timetable-card{
        background-color: var(--clr-grey);
        border: 2px solid var(--clr-grey-border);
        border-radius: 12px;
        margin: 20px auto;
        padding: 0 15px;
        width: 95%;
        max-width: 650px;
    }

    .depart-card__card-item,
    .timetable-card__item{
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 5px 0;
    }

    .depart-card__card-item:not(:nth-last-child(1)),
    .timetable-card__item:not(:nth-last-child(1)){
        border-bottom: 1px solid var(--clr-grey-border);
    }

    .card-item__icon{
        width: 20px;
    }

    .card-item__info{
        flex-grow: 2;

        display: flex;
        justify-content: space-between;
    }

    .card-item__info__time{
        text-align: right;
    }

    .info__transport__code,
    .info__time__time-left{
        font-size: 1.5rem;
    }

</style>