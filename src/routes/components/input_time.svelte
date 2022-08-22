<script>
	let input_focus = false;
	let in_edition = '';
	let can_move_pointer = false;
	let hour_text = '00';
	let minutes_text = '00';
	let clock_hand_rotation = 0;

	function windowMouseDown(e) {
		const input_container = document.querySelector('span.input-time-container');

		if (e.path.includes(input_container)) return null;

		input_focus = false;
		in_edition = '';
	}

	function focusEnter() {
		if (input_focus) return null;

		input_focus = true;
		in_edition = 'hour';
	}
	function mouseUpped() {
		can_move_pointer = false;
		if (in_edition === 'hour') {
			clock_hand_rotation = parseInt(minutes_text) * (360 / 60);

			in_edition = 'minutes';
		} else if (in_edition === 'minutes') {
			clock_hand_rotation = parseInt(hour_text) * (360 / 12);
			in_edition = '';
			input_focus = false;
		}
	}

	function moveClockHand(e) {
		if (!can_move_pointer) return null;

		let round = 1;

		if (in_edition === 'hour') round = 360 / 12;
		if (in_edition === 'minutes') round = 360 / 60;

		// console.log(e)
		const position_info = this.getBoundingClientRect();
		const clock_hand_x_axis = position_info.x + position_info.width / 2; // The clock center
		const clock_hand_y_axis = position_info.y + position_info.height / 2;
		const mouse_x = e.x;
		const mouse_y = e.y;

		const base = mouse_x - clock_hand_x_axis;
		const perp = mouse_y - clock_hand_y_axis;

		const angleRad = Math.atan(base / perp);

		let angleDeg = angleRad * (180 / Math.PI);

		if (base > 0 && perp < 0) angleDeg = angleDeg * -1;
		if (perp > 0) angleDeg = 180 - angleDeg;
		if (base < 0 && perp < 0) angleDeg = 360 - angleDeg;

		// hour_hand.style.transform = `rotate(${angleDeg.toFixed(2)}deg)`;

		let numHour = angleDeg / round < 0.55 ? '12' : (angleDeg / round).toFixed(0);

		if (numHour.length < 2) numHour = '0' + numHour;

		if (in_edition === 'hour') hour_text = numHour;
		if (in_edition === 'minutes') minutes_text = numHour;

		clock_hand_rotation = parseInt(numHour) * round;
	}
</script>

<svelte:window on:mouseup={mouseUpped} on:mousedown={windowMouseDown} />

<span class="input-time-container unselectable-text" on:click={focusEnter} class:focus={input_focus}>
	<span class="time"
		><span class="hour placeholder" class:in-edition={in_edition === 'hour'}>{hour_text}</span>
		<span class="spliter">:</span>
		<span class="minutes placeholder" class:in-edition={in_edition === 'minutes'}
			>{minutes_text}</span
		></span
	>
	<div class="clock-container" on:mousemove={moveClockHand}>
		<div class="clock-hand hour-hand" style:transform="rotate({clock_hand_rotation}deg)">
			<div
				class="hr"
				on:mousedown={() => {
					can_move_pointer = true;
				}}
			/>
		</div>
	</div>
</span>

<style>
	:root {
		--long-clock-hand: calc(15rem / 2 - 43px);
	}
	.input-time-container {
		position: relative;
        margin: 5px 10px;
		padding: 5px 10px;
        
		font-weight: 600;
        border-radius: 12px;
		border: 2px solid black;

		white-space: nowrap;
	}

	.time span.in-edition {
		color: hotpink;
		transform: scale(1.3);
		display: inline-block;
		text-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
	}
	/* *** Clock *** */
	.clock-container {
		display: none;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 15px;
		width: 15rem;
		height: 15rem;
		border-radius: 50%;

		background: url('https://www.vippng.com/png/full/73-731562_free-download-clock-template-with-hands-clipart-clock.png');
		background-color: white;
		background-size: 90%;
		background-position: center;
		background-repeat: no-repeat;

		box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);

		justify-content: center;
		align-items: center;

		z-index: 20;
	}

	.clock-hand {
		background-color: black;
		width: 10px;
		height: 10px;
		position: absolute;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.clock-hand:not(div:active) {
		transition: transform 0.2s ease-out;
	}

	.hr {
		background-color: #00abf4;
		width: 30px;
		height: 30px;
		border-radius: 50%;

		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, calc(-1 * var(--long-clock-hand)));
		opacity: 0.6;
		display: flex;
	}

	.hr:hover {
		cursor: grab;
	}

	.hr:active {
		cursor: grabbing;
	}
	.hr:before {
		content: '';
		background-color: black;
		height: var(--long-clock-hand);
		width: 5px;

		position: absolute;
		left: 50%;
		top: 100%;

		transform: translateX(-50%);
	}

	/* *** Input focus changes *** */
	.input-time-container.focus {
		border-color: #33baf4;
	}
	.input-time-container.focus .clock-container {
		display: flex;
	}
</style>
