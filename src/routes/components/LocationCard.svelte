<script>
	export let data;
</script>

<div class="container">
	<img src="/img/icon-buttons/location-grey.svg" alt="Location marker icon" />
	<div class="content">
		<p class="title">{data.name}</p>
		<p class="address line-clamp">{data.address}</p>
	</div>
</div>

<style>
	.container {
		background-color: #fff;
        width: 95%;
		max-width: 450px;
		border-radius: 8px;
		display: inline-flex;
        align-items: center;
        padding: 5px 0;
        min-height: 80px;
        max-height: 100px;
        overflow: hidden;
	}

	img {
		margin: 0 10px;
	}
	.title {
        width: 100%;
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--clr-dark-text);
        overflow: hidden;
        text-align: left;
	}
	.address {
        width: 100%;
		font-size: 0.9rem;
		color: var(--clr-dark-text);
        max-width: 380px;
        text-align: left;
        
	}

    .line-clamp{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
