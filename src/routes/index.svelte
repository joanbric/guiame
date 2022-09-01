<script>
    export let message;
    console.log(message)
</script>
<header>
	<a href="/"><img class="logo-img" src="img/guiame-logo.png" alt="Guiame Logo" /></a>
	<a class="btn-primary anima-jumping" href="/login">Login</a>
</header>

<main>
	<section>
		<h1>Just <strong>Guiame</strong> around London</h1>
	</section>
    <section></section>
</main>

<style>
	/* header section */

	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		position: fixed;
		top: 0;
		background-color: #fffa;

		box-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);

        z-index: 10;
	}

	.logo-img {
		max-width: 12.5rem;
	}

	section {
		height: 100vh;
        overflow: hidden;
	}
    
    
    section:nth-child(1){
        padding-top: 12rem;
        background-image: url('img/others/bus-and-bigben.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 75% 0;
    }

	h1 {
		text-align: center;
		padding: 35px 0;
		font-size: 4rem;
		text-transform: capitalize;
		line-height: 3.6rem;
        text-shadow: 0 2px 14px rgba(255, 255, 255, .8);
	}

	h1 > strong {
		color: rgb(255, 255, 0);
		font-size: 1.1em;
		text-shadow: 0 2px 14px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, .5);
	}
</style>
