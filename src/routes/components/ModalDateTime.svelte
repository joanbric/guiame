<script>
	import { createEventDispatcher } from 'svelte';
    import getDateTime from '$lib/getDateTime'

	import Modal from './modal.svelte';

	const dispatch = createEventDispatcher();
    const curr_time = getDateTime(1)
    let selected_time = curr_time.time;
    let selected_date = curr_time.date;
    console.log("🚀 ~ file: ModalDateTime.svelte ~ line 10 ~ selected_date", selected_date)


	function closeModal() {
		dispatch('closeModal');
	}

	function accept() {
        dispatch('accept', {
            mode: title.includes('Departure') ? "Departure" : "Arrival",
            selected_date,
            selected_time
        });
    }

	export let title;
</script>

<Modal on:closeModal={closeModal} on:accept={accept}>
	<span slot="title">{title}</span>

	<input type="date" id="date-control" bind:value={selected_date}/>
	<input type="time" id="time-control" bind:value={selected_time}/>
</Modal>

<style>
	input {
		display: block;
		margin: 30px auto;
		font-size: 1.2rem;
		border: none;
		border-bottom: 1px solid grey;
	}
</style>
