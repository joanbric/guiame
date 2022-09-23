<script>
    export let dot_color = "#333";
</script>
<div class="loading">
	<div class="dot" style="background-color: {dot_color};"/>
	<div class="dot" style="background-color: {dot_color};"/>
	<div class="dot" style="background-color: {dot_color};"/>
</div>

<style>
	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		gap: 15px;
		justify-content: center;
		align-items: center;
	}

	.dot {
        --circle-size: 10px;
		width: var(--circle-size);
		height: var(--circle-size);
		background-color: #333;
		border-radius: 100vmax;
		animation: updown 0.5s ease-in-out infinite alternate;
	}
	.dot:nth-child(2) {
		animation-delay: 0.15s;
	}
	.dot:nth-child(3) {
		animation-delay: 0.30s;
	}

	@keyframes updown {
		50% {
			transform: translateY(0);
		}
		to {
			transform: translateY(-10px);
		}
	}
</style>
