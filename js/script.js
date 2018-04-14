$(document).ready(function() {
	// Get current value that's displayed (initialization)
	var breakLength = +$(".break-length .num").text();
	var sessionLength = +$(".session-length .num").text();
	var timeLeft = +$(".clock .num").text() * 60;
	var isRunning = false;

	// Update on increasing/decreasing value
	$(".break-length .increase").click(function() {
		isRunning = false;
		$(".break-length .num").text(breakLength + 1);
		breakLength++;
	});

	$(".session-length .increase").click(function() {
		isRunning = false;
		$(".session-length .num").text(sessionLength + 1);
		sessionLength++;
		$(".clock .num").text(sessionLength);
		timeLeft = sessionLength * 60;
	});

	$(".break-length .decrease").click(function() {
		isRunning = false;
		// We don't want 0 or negative values
		if (breakLength > 1) {
			$(".break-length .num").text(breakLength - 1);
			breakLength--;
		}
	});

	$(".session-length .decrease").click(function() {
		isRunning = false;
		if (sessionLength > 1) {
			$(".session-length .num").text(sessionLength - 1);
			sessionLength--;
			$(".clock .num").text(sessionLength);
			timeLeft = sessionLength * 60;
		}
	});

	setInterval(function() {
		// Work with seconds and translate it into mm:ss format
		if (isRunning) {
			timeLeft--;
		}
		var minutes = Math.floor(timeLeft / 60);
		var seconds = timeLeft % 60;
		if (seconds === 0) {
			$(".clock .num").text(minutes);
		}
		else if (seconds.toString().length == 1) {
			$(".clock .num").text(minutes + ":0" + seconds);
		}
		else {
			$(".clock .num").text(minutes + ":" + seconds);
		}
	}, 1000);

	// Pause countdown on click
	$(".clock").click(function() {
		if (isRunning) {
			isRunning = false;
		}
		else {
			isRunning = true;
		}
	});
});
