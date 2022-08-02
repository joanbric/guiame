<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<main>
    
    <div class="content">
        <h1>{title}</h1>
        <p>Sorry but this page doesn't exits.</p>
        <a href="/">Go to home page</a>
	</div>
    <img src="others/lost.png" alt="A lost man" />
</main>

<style>
    main{
        margin: 50px 25px;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    div{
        text-align: right;

    }
    h1{
        font-size: 2.5rem;
        margin-bottom: 20px
    }
</style>
