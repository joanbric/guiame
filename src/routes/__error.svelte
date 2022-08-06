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
	<img src="img/others/lost.png" alt="A lost man" />
	<div class="content">
		<h1>{title}</h1>
		<p>Sorry but this page doesn't exits.</p>
		<a href="/">Go to home page</a>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 0 20px;
	}

	img {
		width: 100%;
		max-width: 675px;
	}
	div.content {
		display: inline-block;
		text-align: right;
	}
	h1 {
		font-size: 2.5rem;
		margin-bottom: 20px;
	}
.content a{
    font-weight: 500;
}
</style>
