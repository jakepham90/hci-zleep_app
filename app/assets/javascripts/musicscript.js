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
	document.getElementById("title1").innerHTML = "Trouble sleeping?";
	document.getElementById("title2").innerHTML = "Pick a track from below and set the timer!" 	;	
	//register event handlers for volume and play button
	$("#playButton").click(startTimer);

}

startTimer.userTime;
startTimer.player;

//Handle countdown timer changes
function startTimer(e){
	event.preventDefault();

	startTimer.userTime = $("#timer").val();
	document.getElementById("timerText1").innerHTML = "Your music will turn off in :";
	document.getElementById("timerText2").innerHTML = startTimer.userTime;
	console.log("play pushed, music will play for " + startTimer.userTime);
	window.setInterval(timerEventHandler, 60000);

	//Hide instructions after user initiates playback
	document.getElementById("title1").style.display = 'none';
	document.getElementById("title2").style.display = 'none';
	document.getElementById("playButton").innerHTML = "Restart Timer";

}

//TimerHandler's persistent time property
timerEventHandler.elapsedTime;

//Every 60 seconds, update the elapse time
function timerEventHandler(e){

	//Increment elapsed time
	timerEventHandler.elapsedTime = timerEventHandler.elapsedTime + 1;
	console.log("Elapsed time: " + timerEventHandler.elapsedTime);

	var s = startTimer.userTime.split(" ",2);
	
	document.getElementById("timerText2").innerHTML = (s[0] -  timerEventHandler.elapsedTime + " minutes");

	//If the timer is expired, stop music playback
	if (timerEventHandler.elapsedTime >= s[0] ){
		window.location.href = "/alarm/sleep";
		timerEventHandler.elapsedTime = 0;
		window.clearInterval(timerEventHandler);
	}
}
