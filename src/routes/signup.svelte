
<header>
	<a href="/"><img class="app-logo" src="img/guiame-logo.png" alt="Guiame app logo" /></a>
</header>

<main>
	<h1>Sign-up</h1>
	<form action="signup" method="post">
		<div class="input-container">
			<label for="name">Name</label>
			<input type="text" name="name" id="txtName" />
		</div>
		<div class="input-container">
			<label for="e-mail">E-mail</label>
			<input type="email" name="e-mail" id="txtEmail" />
		</div>
		<div class="input-container">
			<label for="pass">Password</label>
			<input type="password" name="pass" id="txtPass" />
		</div>

		<button type="submit">Sign Up</button>
	</form>

	<p>Do you already have an account? So <a href="/login">Login</a></p>
</main>

<style>
	header {
		text-align: center;
		background-color: var(--clr-green);
		border-radius: 0 0 1.2rem 1.2rem;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
	}
	header .app-logo {
		width: 100%;
		max-width: 250px;
	}

	main {
		text-align: center;
		padding: 20px 0;
	}

	form {
		padding: 20px 25px;
		width: 100%;
		max-width: 800px;

		margin: 0 auto;
	}

	.input-container {
		width: 100%;
        max-width: 575px;
		display: flex;
		flex-direction: column;
		align-items: start;

		margin: 10px auto;
	}

    input{
        box-sizing: border-box;
		display: block;
		width: 100%;
		height: 2rem;

        background-color: #E9E9E9;
		
		outline: none;
		border: none;
		padding: 20px 10px;
		font-size: 1rem;

		border-radius: 8px;
    }
    button{
        background-color: var(--clr-yellow);
        color: var(--clr-dark-text);
        border: none;
        padding: 15px 30px;
        margin-top: 55px;
        margin-bottom: 20px;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 12px;
        box-shadow: 0 0 12px rgba(0, 0, 0, .2);
    }

    a{
        font-weight: 500;
    }
</style>
