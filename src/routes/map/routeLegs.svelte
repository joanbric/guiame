<script>
    import { createEventDispatcher } from "svelte";
	export let routeLegs;


    const dispatch = createEventDispatcher();

    function goBack(){
        dispatch('goBack', {})
    }

</script>


<div class="legs-route">
    <button class="back-btn" on:click={goBack}>atras</button>
    <ul class="legs-container">

        {#each routeLegs as leg}
        <li class="leg">
            {leg.instruction.detailed}
            {#each leg.instruction.steps as step}
                <div>{step.description}</div>
                {/each}
                {#each leg.path.stopPoints as stopPoint}
                    <div>{stopPoint.name}</div>
                {/each}
        </li>
        {/each}
    </ul>
</div>

<style>
    /* Back button */
    .legs-route{
        padding: 10px;
    }

    .legs-route button.back-btn{
        background: none;
        border: 1px solid cadetblue;
        padding: 5px 10px;
        border-radius: 13px;
        color: cadetblue;
        font-weight: bold;

    }

    .legs-route button.back-btn:hover{
        background-color: rgb(149, 200, 202);
        color: #222;
    }

    .legs-route button.back-btn:active{
        background-color:  rgb(10, 127, 131);
    }


    /* List of legs */
    ul{
        padding: 10px 15px;
        list-style: none;

    }

    ul.legs-container li.leg{
        padding: 15px 5px;
        
    }

    ul.legs-container li.leg:hover{
        background-color: rgb(216, 216, 216);
    }
</style>

