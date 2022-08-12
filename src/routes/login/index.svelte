<script>
	export let response;
	import Notification from '../components/notification.svelte';

	function deleteRes() {
		response = undefined;
	}
</script>

<header>
	<a href="/"> <img src="img/guiame-logo.png" alt="Guiame Logo" /></a>
</header>

<main>
	<h1>Login</h1>
	<form action="login" method="post">
		<div class="input-container">
			<label for="user">E-mail</label>
			<input type="email" name="user" id="txtEmail" />
		</div>
		<div class="input-container">
			<label for="pass">Password</label>
			<input type="password" name="pass" id="txtPass" />
		</div>

		<p><a href="forgotten-pass">Ups!, I forgot my password</a></p>

		<button class="btn-primary" type="submit">Login</button>

		<p><a href="signup">But, I already have an account</a></p>
	</form>
</main>

{#if response}
	<Notification type="critical" msg={response.message} on:close={deleteRes} />
{/if}

<style>
	header {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 15px;
	}

	header img {
		width: 100%;
		max-width: 250px;
	}

	main {
		width: 90%;
		max-width: 800px;
		background-color: var(--clr-green);
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
		border-radius: 1.2rem;
		text-align: center;
		padding-top: 20px;
		margin: 0 auto;
	}
	main h1,
	main label,
	main p a {
		color: var(--clr-bright-text);
	}

	form {
		width: 100%;
		padding: 15px 20px;
	}

	.input-container {
		text-align: left;
		margin: 20px auto;
		max-width: 575px;
	}

	input {
		box-sizing: border-box;
		display: block;
		width: 100%;
		height: 2rem;

		outline: none;
		border: none;
		padding: 20px 10px;
		font-size: 1rem;

		border-radius: 8px;
	}

	button {
		margin-top: 55px;
		margin-bottom: 25px;
	}
</style>
