/*
 * index.js
 * Put your JavaScript in here
 */

"use strict";

var startButton, stopButton 						= undefined;
var latitudeLabel, longitudeLabel, accuracyLabel 	= undefined;
var altitudeLabel, altAccuracyLabel 				= undefined;
var headingLabel, speedLabel, timestampLabel 		= undefined;

var geolocationWatcher = null;
var geolocationOptions = { enableHighAccuracy: true };

/*===========================*/
/* put global variables here */
/*===========================*/

/* wait until all phonegap/cordova is loaded then call onDeviceReady */
document.addEventListener("deviceready", onDeviceReady, false);

/* android have a back button, we want to stop watching when pressed */
document.addEventListener("backbutton", stopWatchingGeolocation, false);

function onDeviceReady() {

	latitudeLabel 	 = document.getElementById("latitudeId");
	longitudeLabel 	 = document.getElementById("longitudeId");
	accuracyLabel 	 = document.getElementById("accuracyId"); 
	altitudeLabel	 = document.getElementById("altitudeId"); 
	altAccuracyLabel = document.getElementById("altAccuracyId");
	headingLabel	 = document.getElementById("headingId"); 
	speedLabel		 = document.getElementById("speedId");   
	timestampLabel	 = document.getElementById("timestampId");

	startButton 	 = document.getElementById("startButtonId");
	stopButton	 	 = document.getElementById("stopButtonId");

	startButton.addEventListener("click", startWatchingGeolocation, false);
	stopButton.addEventListener( "click", stopWatchingGeolocation,  false);

	startButton.disabled = false;
	stopButton.disabled  = true;
}

/*======================================*/
/* place your function definitions here */
/*======================================*/


function startWatchingGeolocation() {
	geolocationWatcher = 
		navigator.geolocation.watchPosition(geolocationSuccess,
		  									geolocationError,
											geolocationOptions);
	startButton.disabled = true;
	stopButton.disabled  = false;

}

function stopWatchingGeolocation() {
	navigator.geolocation.clearWatch(geolocationWatcher);
	geolocationWatcher = null;

	startButton.disabled = false;
	stopButton.disabled  = true;	
}

function geolocationSuccess(position) {
	latitudeLabel.innerHTML 	= position.coords.latitude;
	longitudeLabel.innerHTML 	= position.coords.longitude;
	accuracyLabel.innerHTML 	= position.coords.accuracy;

	altitudeLabel.innerHTML 	= position.coords.altitude;
	altAccuracyLabel.innerHTML 	= position.coords.altitudeAccuracy;
	
	headingLabel.innerHTML 		= position.coords.heading;
	speedLabel.innerHTML 		= position.coords.speed;
	timestampLabel.innerHTML 	= position.timestamp;
}

function geolocationError() {
	alert("Error in geolocation subsystem!");
}
