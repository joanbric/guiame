<script>

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();


	export let type = 'alert';
	export let msg;

    function close(){
        dispatch('close')
    }
</script>

<div class="noti-container {type}">
	<p>{msg}</p>
	<button on:click={close}>
        <svg class="close-btn-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0ZM40.8894 45.738L32 36.8486L23.1106 45.738L18.262 40.8894L27.1514 32L18.262 23.1106L23.1106 18.262L32 27.1514L40.8894 18.262L45.738 23.1106L36.8486 32L45.738 40.8894L40.8894 45.738Z"
				fill="white"
			/>
		</svg>
	</button>
</div>

<style>
	.alert {
		background-color: rgba(239, 241, 110, 0.5);
	}
	.critical {
		background-color: rgba(226, 66, 66, 0.5);
		border-color: rgb(226, 66, 66);
	}

    .critical .close-btn-icon{
        fill: rgb(226, 66, 66);
        width: 100%;
        height: 100%;
    }

	.noti-container {
		width: 100%;
		max-width: 300px;
		position: fixed;
		bottom: 10px;
		right: 5px;

		border-width: 2px;
		border-style: solid;
		border-radius: 5px;

		padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        animation: slidein .5s ease-out;
	}



    button{
        width: 25px;
        height: 25px;

        background: none;
        border: none;
        outline: none;
    }

    @keyframes slidein{
        from{
            transform: translateY(20px);
            opacity: 0;
        }
    }
</style>
