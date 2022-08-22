<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function closeModal(){
        dispatch('closeModal')    

    }
    function disableScroll(){
        let x = window.scrollX;
        let y = window.scrollY;
        window.onscroll = ()=>{window.scrollTo(x, y);};
    }


</script>

<svelte:window on:scroll|preventDefault={disableScroll}/>
<div class="background" on:click={closeModal}>
	
</div>
<div class="content">
    <h1 class="title">
        <slot name="title" />
    </h1>

    <div class="main-content">
        <slot name="main-content"/>
    </div>

    <slot name="footer">

        <footer class="footer">
            <button class="simple-btn simple-btn-cancel">Cancel</button>
            <button class="simple-btn simple-btn-accept"><slot name="btn-accept-text"><span class="btn-accept-text">Accept</span></slot></button>
        </footer>
    </slot>
</div>
<style>
    .title{
        text-align: center;
    }
	.background {
		background-color: #000;
		opacity: 0.6;
		position: absolute;
		inset: 0;

		z-index: 20;
	}

    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        min-width: 325px;
        max-width: 500px;
        height: fit-content;
        z-index: 21;
        

        background-color: white;
        border-radius: 15px;
        padding: 15px 10px;
    }

    .main-content{
        padding: 35px 0 15px 0;
    }

    .footer{
        display: flex;
        justify-content: end;
        gap: 25px;

        padding: 5px;
    }

</style>
