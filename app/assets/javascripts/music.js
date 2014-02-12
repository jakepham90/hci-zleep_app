/* ZLEEP, the Moble Web App Sleep Assistant
 * @author: Nick Variz
 */

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
	$("#playmusic").click(playMusic);
	$("#volume").change(changeVolume);
	$("#fade").change(changeFade);
	$("#timer").change(changeTimer);
}

//Handle fade timer changes
function changeFade(e){
	event.preventDefault();

	if($("#fade").val() == '')
		alert("Please enter a 'Fade time' between 1 and 60 minutes");
	else changeFade.currFade = $("#fade").val();
}

//Handle countdown timer changes
function changeTimer(e){
	event.preventDefault();

	if($("#timer").val() == '')
		alert("Please enter a 'Turn off' time between 1 and 60 minutes.");

	else changeTimer.currTime = $("#timer").val();
}

//Handle volume slider changes
function changeVolume(e){
	event.preventDefault();

	if(playMusic.currentTrack != undefined)
		playMusic.currentTrack.volume = $("#volume").val() / 10;
}

//TimerHandler's persistent time property
timerEventHandler.elapsedTime;

//Every 60 seconds, update the elapse time and fade volume as necessary
function timerEventHandler(e){

	//Increment elapsed time
	timerEventHandler.elapsedTime = timerEventHandler.elapsedTime + 1;
	console.log("Elapsed time: " + timerEventHandler.elapsedTime);

	//Lower volume by 25% each minute if within the "fade out" band chosen by the user
	if ( (timerEventHandler.elapsedTime - changeTimer.currTime ) <= changeFade.currFade )
		playMusic.currentTrack.volume = playMusic.currentTrack.volume*(.75);

	//If the timer is expired, stop music playback
	if (timerEventHandler.elapsedTime >= changeTimer.currTime ){
		playMusic.currentTrack.pause();
		timerEventHandler.elapsedTime = 0;
		window.clearInterval(timerEventHandler);
		alert("Playback stopped. Sweet Dreams!");
	}
}

//Pointers to the current music session attributes
playMusic.currentTrack;
changeTimer.currTime;
changeFade.currFade;

playMusic.zen = new Audio('../assets/zen.mp3');
playMusic.nature = new Audio('../assets/nature.mp3');
playMusic.animal = new Audio('../assets/animals.mp3');
 
//Parse form input to setup music session
function playMusic(e){
	event.preventDefault();
		
	var type = $("#musicpicker :selected").text();

	if( $("#fade").val() == '' || $("#timer").val() == '' ||
		$("#fade").val() < 0 || $("#timer").val() <= 0)
		alert("Please enter numeric values > 0 for Fade and Timer.");
	else if (type == "Zen Mix"){
		console.log("Zen music picked");

		//Clean up previous zen audio object
		playMusic.zen.pause();
		playMusic.zen.load();
		//Ensure no other audio objects are playing
		playMusic.nature.pause();
		playMusic.animal.pause();

		//Set up current track as the zen track
		playMusic.currentTrack = playMusic.zen;
		playMusic.currentTrack.loop = true;
		playMusic.currentTrack.volume = $("#volume").val() / 10;
		playMusic.currentTrack.play();

		//start timer event firing
		window.setInterval(timerEventHandler, 60000);

	}else if(type == "Nature Sounds"){
		console.log("Nature Sounds picked");

		//Clean up previous nature audio object	
		playMusic.nature.pause();
		playMusic.nature.load();

		//Ensure no other audio objects are playing
		playMusic.zen.pause();
		playMusic.animal.pause();
		
		playMusic.currentTrack = playMusic.nature;
		playMusic.currentTrack.loop = true;
		playMusic.currentTrack.volume = $("#volume").val() / 10;
		playMusic.currentTrack.play();

		window.setInterval(timerEventHandler, 60000);

	}else if(type == "Forest Animals"){
		console.log("Forest Animals picked");

		//Clean up previous animal audio object	
		playMusic.animal.pause();
		playMusic.animal.load();

		//Ensure no other audio objects are playing
		playMusic.zen.pause();
		playMusic.nature.pause();

		playMusic.currentTrack = playMusic.animal;
		playMusic.currentTrack.loop = true;
		playMusic.currentTrack.volume = $("#volume").val() / 10;
		playMusic.currentTrack.play();

		window.setInterval(timerEventHandler, 60000);

	}else{
		alert("Please select some music from the picker.");
	}
	
}
