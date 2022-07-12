<h1>Welcome to SvelteKit</h1>

<a href="map">Visitar el mapa</a>

<style>
	h1 {
		text-align: center;
		padding: 35px 0;
	}
	a {
		background-color: yellow;
		padding: 15px 10px;
		border-radius: 8px;
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
		box-shadow: 0 2px 12px #00000055;
		display: block;
		max-width: fit-content;
		margin: 50px auto 0 auto;

		animation: jumping 6s ease-in-out infinite 2s;
	}
    a:hover{
        transform: scale(1.3);
        transition: transform .3s ease-in;
        animation: none;
    }

	@keyframes jumping {
		from,
		10%,
		20%,
		to {
			transform: scale(1);
			box-shadow: 0 2px 12px #00000055;
		}

		5%,
		15% {
			transform: scale(1.1);
			box-shadow: 0 2px 20px #00000066;
		}
	}
</style>
