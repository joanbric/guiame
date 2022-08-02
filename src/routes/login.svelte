<header>
	<a href="/"> <img src="guiame-logo.png" alt="Guiame Logo" /></a>
</header>

<main>
	<h1>Login</h1>
	<form action="login" method="post">
		<div class="input-container">
			<label for="email">E-mail</label>
			<input type="email" name="email" id="txtEmail" />
		</div>
		<div class="input-container">
			<label for="password">Password</label>
			<input type="password" name="password" id="txtPass" />
		</div>

		<p><a href="forgotten-pass">Ups!, I forgot my password</a></p>

		<button type="submit">Login</button>

		<p><a href="signup">But, I already have an account</a></p>

        <div class="image-decoration">
            <img src="others/man-waiting-bus-stop.png" alt="A man waiting in a bus stop" />
        </div>
	</form>
</main>

<style>
	header {
		height: 18.96vh;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

    header img{
        width: 100%;
        max-width: 250px;
    }

	main {
        width: 90%;
        max-width: 800px;
		background-color: var(--clr-green);
		box-shadow: 0 -2px 18px rgba(0, 0, 0, 0.3);
		border-radius: 1.2rem;
		text-align: center;
		padding-top: 20px;
        margin: 0 auto;
	}
	main * {
		color: white;
	}

	form {
		width: 100%;
		margin: 15px 0;
        padding: 0 20px;
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

		color: black;

		outline: none;
		border: none;
		padding: 20px 10px;
		font-size: 1.2rem;

		border-radius: 8px;
        
	}

    button{
        background-color: var(--clr-yellow);
        color: var(--clr-dark-text);
        border: none;
        padding: 15px 30px;
        margin-top: 55px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: 700;
        border-radius: 12px;
        box-shadow: 0 0 12px rgba(0, 0, 0, .2);
    }

    form img{
        width: 100%;
        max-width: 300px;
        margin-top: 30px
    }

</style>
