'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
        
	$("#playmusic").click(playMusic);
}

function playMusic(e){
	event.preventDefault();
	var vol = $("#volume").val();
	var fade = $("#timer").val();
	var countdown = $("#timer").val();
	var type = $("#musicpicker :selected").text();
	console.log("Playing " + type + ", volume is " + vol + ", timer set to " + countdown + ", fade last "
		+ countdown + " minutes." );
}
