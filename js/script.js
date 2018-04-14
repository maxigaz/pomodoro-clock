$(document).ready(function() {
	// Get current value that's displayed (initialization)
	var breakLength = +$(".break-length .num").text();
	var sessionLength = +$(".session-length .num").text();
	var timeLeft = +$(".clock .num").text() * 60;

	// Update on increasing/decreasing value
	$(".break-length .increase").click(function() {
		$(".break-length .num").text(breakLength + 1);
		breakLength++;
	});

	$(".session-length .increase").click(function() {
		$(".session-length .num").text(sessionLength + 1);
		sessionLength++;
	});

	$(".break-length .decrease").click(function() {
		// We don't want 0 or negative values
		if (breakLength > 1) {
			$(".break-length .num").text(breakLength - 1);
			breakLength--;
		}
	});

	$(".session-length .decrease").click(function() {
		if (sessionLength > 1) {
			$(".session-length .num").text(sessionLength - 1);
			sessionLength--;
		}
	});

	setInterval(function() {
		// Work with seconds and translate it into mm:ss format
		timeLeft--;
		var minutes = Math.floor(timeLeft / 60);
		var seconds = timeLeft % 60;
		if (seconds === 0) {
			$(".clock .num").text(minutes);
		}
		else {
			$(".clock .num").text(minutes + ":" + seconds);
		}
	}, 1000);
});
