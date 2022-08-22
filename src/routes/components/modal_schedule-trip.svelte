<script>
	import Modal from './modal.svelte';
	import InputTime from './input_time.svelte';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


    function closeModal(){
        dispatch('closeModal');
    }

</script>

<Modal on:closeModal>
	<span slot="title">Schedule Trip</span>

	<form method="post" slot="main-content" class="main-content unselectable-text">
		<p class="arrival-label modal-label">Arrive to</p>
		<div class="arrival-card">
			<img
				src="/img/icon-buttons/location-grey.svg"
				alt="location icon"
				class="arrival-card__icon"
			/>
			<div class="arrival-card__info">
				<p class="info__name">Hyde Park</p>
				<p class="info__address">Hyde Park, London, Reino Unido</p>
			</div>
		</div>
		<p class="datetime-label modal-label">at</p>
		<input type="radio" checked name="schedule-type" id="rbOneTime" class="radio radio-one-time" />
		<input type="radio" name="schedule-type" id="rbEveryDay" class="radio radio-every-day" />
		<input type="radio" name="schedule-type" id="rbSomeDays" class="radio radio-some-days" />
		<div class="schedule-type">
			<div class="schedule-type__input">
				<label for="rbOneTime" class="schedule-type__radio-label label-one-time">One time</label>
			</div>
			<div class="schedule-type__input">
				<label for="rbEveryDay" class="schedule-type__radio-label label-every-day">Every day</label>
			</div>
			<div class="schedule-type__input">
				<label for="rbSomeDays" class="schedule-type__radio-label label-some-days">Some days</label>
			</div>
		</div>

		<div class="schedule-datetime-container">
			<div class="schedule-day">
				<label class="schedule-day__item"
					><input type="checkbox" name="monday" id="chbMonday" /><span class="day__item__label"
						> Monday</span
					></label
				>
				<label class="schedule-day__item"
					><input type="checkbox" name="thuesday" id="chbThuesday" /><span class="day__item__label"
						> Thuesday</span
					></label
				>
				<label class="schedule-day__item"
					><input type="checkbox" name="wednesday" id="chbWednesday" /><span
						class="day__item__label"> Wednesday</span
					></label
				>
				<label class="schedule-day__item"
					><input type="checkbox" name="thursday" id="chbThursday" /><span class="day__item__label"
						> Thursday</span
					></label
				>
				<label class="schedule-day__item"
					><input type="checkbox" name="friday" id="chbFriday" /><span class="day__item__label"
						>Friday</span
					></label
				>
				<label class="schedule-day__item"
					><input type="checkbox" name="saturday" id="chbSaturday" /><span class="day__item__label"
						> Saturday</span
					></label
				>
				<label class="schedule-day__item"
					><input type="checkbox" name="sunday" id="chbSunday" /><span class="day__item__label"
						> Sunday</span
					></label
				>
			</div>

			<div class="schedule-date">
				<span class="input__item"><input type="date" name="date" id="date" /></span>
			</div>

			<div class="schedule-time">
				<div class="schedule-time__item">
					<InputTime />
				</div>
			</div>
		</div>

        <div class="form-footer">

            <button on:click={closeModal} type="button" class="simple-btn simple-btn-cancel">Cancel</button>
            <button type="submit" class="simple-btn simple-btn-accept">Schedule</button>
        </div>
	</form>
	<footer slot="footer" />
</Modal>

<style>
	.main-content {
		padding: 0 30px;
	}

	.modal-label {
		margin-bottom: 5px;
	}
	.arrival-card {
		display: flex;
		align-items: center;
		background-color: var(--clr-grey-input);

		padding: 5px 10px;
		margin-bottom: 15px;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
		border-radius: 8px;
	}

	.arrival-card__icon {
		height: 2.5rem;
		padding: 0 0.5rem;
	}

	.info__name {
		font-size: 1.5rem;
	}
	.info__address {
		color: var(--clr-grey-text);
	}

	.radio {
		display: none;
	}

	.schedule-type__input {
		margin-bottom: 8px;
	}

	.schedule-type__radio-label {
		margin-left: 10px;
		position: relative;
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.schedule-type__radio-label::before {
		content: '';
		width: 1rem;
		height: 1rem;
		border: 2px solid var(--clr-blue);
		border-radius: 50%;
	}

	.schedule-type__radio-label::after {
		content: '';
		width: 0.8rem;
		height: 0.8rem;
		background-color: var(--clr-blue);
		position: absolute;
		border-radius: 50%;
		margin-left: calc(2px + 0.1rem);
		margin-top: 1px;
		display: none;
	}

	.radio-one-time:checked ~ .schedule-type .label-one-time::after,
	.radio-every-day:checked ~ .schedule-type .label-every-day::after,
	.radio-some-days:checked ~ .schedule-type .label-some-days::after {
		display: block;
	}

    .radio-one-time:not(:checked) ~ .schedule-datetime-container .schedule-date,
    .radio-some-days:not(:checked) ~ .schedule-datetime-container .schedule-day
    {
        display: none;
    }

    .schedule-datetime-container{
        padding: 20px 0;
    }

    .schedule-day{
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .schedule-day__item{
        word-wrap: normal;
    }

    .day__item__label{
        margin-left: 5px;
    }


.schedule-date,
.schedule-time{
    padding: 15px 0;
    text-align: center;
}

.input__item{
    padding: 5px;
}

.input__item input{
    margin-left: 15px;
    position: relative;
        margin: 5px 10px;
		padding: 5px 10px;
        
		font-weight: 600;
        border-radius: 12px;
		border: 2px solid black;
}
.input__item input:focus,
.input__item input:active{
    border-color: #33baf4;
    outline-color: #33baf4;
}

.form-footer{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 30px;
}
</style>

