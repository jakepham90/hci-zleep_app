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

	var vol = ($("#volume").val()) / 10;
	var fade = $("#timer").val();
	var countdown = $("#timer").val();
	var type = $("#musicpicker :selected").text();
	
	var endTime = new Date().getTime() + countdown*60*1000; 

	//Handle undefined values
	if(fade == ""){
		console.log("Assuming default fade time of 5 minutes");
		fade = 5;
	}
	if(countdown == ""){
		console.log("Assuming default countdown time of 30 minutes");
		countdown = 30;
	}

	var zenAudio = new Audio('zen.mp3');
	var natureAudio = new Audio('nature.mp3');
	var animalAudio = new Audio('animals.mp3');

	//Start playing music with chosen settings

	if (type == "Zen Mix"){
		console.log("Zen music picked");
		if(!(natureAudio.ended))
			natureAudio.pause();
		if(!(animalAudio.ended))
			animalAudio.pause();
		zenAudio.load();
		zenAudio.volume = vol;
		zenAudio.loop = true;	
		zenAudio.play();

	}else if(type == "Nature Sounds"){
		console.log("Nature Sounds picked");
		if(!(zenAudio.ended))
			zenAudio.pause();
		if(!(animalAudio.ended))
			animalAudio.pause();
		natureAudio.load();
		natureAudio.volume = vol;
		natureAudio.loop = true;	
		natureAudio.play();

	}else if(type == "Forest Animals"){
		console.log("Forest Animals picked");
		if(!(zenAudio.ended))
			zenAudio.pause();
		if(!(natureAudio.ended))
			natureAudio.pause();
		animalAudio.load();
		animalAudio.volume = vol;
		animalAudio.loop = true;	
		animalAudio.play();
	}else{
		type = "no music";
		alert("Please select some music from the picker.");
	}
	
	console.log("Playing " + type + ", volume is " + vol + ", timer set to " + countdown + ", fade last "
		+ fade + " minutes." );
	
}
