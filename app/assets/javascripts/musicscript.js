'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	timerEventHandler.elapsedTime = 0;
	
	//register event handlers for volume and play button
	$("#playButton").click(startTimer);
}

startTimer.userTime;

//Handle countdown timer changes
function startTimer(e){
	event.preventDefault();
	startTimer.userTime = $("#timer").val();
	console.log("playbutton pushed, music will play for " + startTimer.userTime + " minutes.");
	window.setInterval(timerEventHandler, 60000);
}

//TimerHandler's persistent time property
timerEventHandler.elapsedTime;

//Every 60 seconds, update the elapse time and fade volume as necessary
function timerEventHandler(e){

	//Increment elapsed time
	timerEventHandler.elapsedTime = timerEventHandler.elapsedTime + 1;
	console.log("Elapsed time: " + timerEventHandler.elapsedTime);

	//If the timer is expired, stop music playback
	if (timerEventHandler.elapsedTime >= startTimer.userTime ){
		location.reload();
		timerEventHandler.elapsedTime = 0;
		window.clearInterval(timerEventHandler);
	}
}


