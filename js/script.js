$(document).ready(function() {
	// Get current value that's displayed (initialization)
	var breakLength = +$(".break-length .num").text();
	var sessionLength = +$(".session-length .num").text();
	var timeLeft = 25 * 60;
	var isRunning = false;
	var isBreak = false;

	// Update on increasing/decreasing value
	$(".break-length .increase").click(function() {
		pause();
		$(".break-length .num").text(breakLength + 1);
		breakLength++;
	});

	$(".session-length .increase").click(function() {
		pause();
		$(".session-length .num").text(sessionLength + 1);
		sessionLength++;
		$(".clock .num").text(sessionLength + ":00");
		timeLeft = sessionLength * 60;
	});

	$(".break-length .decrease").click(function() {
		pause();
		// We don't want 0 or negative values
		if (breakLength > 1) {
			$(".break-length .num").text(breakLength - 1);
			breakLength--;
		}
	});

	$(".session-length .decrease").click(function() {
		pause();
		if (sessionLength > 1) {
			$(".session-length .num").text(sessionLength - 1);
			sessionLength--;
			$(".clock .num").text(sessionLength + ":00");
			timeLeft = sessionLength * 60;
		}
	});

	setInterval(function() {
		// Switch between sessions and breaks when time's up
		if (timeLeft === 1) {
			// Are we having a session or a break?
			if (!isBreak) {
				isBreak = true;
				$(".clock .label").text("Break");
				timeLeft = breakLength * 60;
			}
			else {
				isBreak = false;
				$(".clock .label").text("Session");
				timeLeft = sessionLength * 60;
			}
		}

		// Work with seconds and translate it into mm:ss format
		if (isRunning) {
			timeLeft--;
		}
		var minutes = Math.floor(timeLeft / 60);
		var seconds = timeLeft % 60;
		if (seconds.toString().length == 1) {
			$(".clock .num").text(minutes + ":0" + seconds);
		}
		else {
			$(".clock .num").text(minutes + ":" + seconds);
		}
	}, 1000);

	// Pause countdown on click
	$(".clock").click(function() {
		if (isRunning) {
			pause();
		}
		else {
			unPause();
		}
	});

	$(".pause").click(function() {
		if (isRunning) {
			pause();
		}
		else {
			unPause();
		}
	});

	// Functions to actually pause (to somewhat reduce code)
	function unPause() {
		isRunning = true;
		$(".clock").css("border-color", "#084aff");
	}

	function pause() {
		isRunning = false;
		$(".clock").css("border-color", "#ff0c55");
	}
});
