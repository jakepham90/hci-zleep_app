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
	document.getElementById("title").innerHTML = "Trouble sleeping?";
	document.getElementById("timeoff").innerHTML = "Pick a track from below and set the timer!" 	;	
	//register event handlers for volume and play button
	$("#playButton").click(startTimer);

}

startTimer.userTime;

//Handle countdown timer changes
function startTimer(e){
	event.preventDefault();
	startTimer.userTime = $("#timer").val();
	document.getElementById("title").innerHTML = "Your music will turn off in :";
	document.getElementById("timeoff").innerHTML = startTimer.userTime + " minutes ";
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
	document.getElementById("timeoff").innerHTML = (startTimer.userTime -  timerEventHandler.elapsedTime) + " minutes ";

	//If the timer is expired, stop music playback
	if (timerEventHandler.elapsedTime >= startTimer.userTime ){
		window.location.href = "/alarm/sleep";
		timerEventHandler.elapsedTime = 0;
		window.clearInterval(timerEventHandler);
	}
}
