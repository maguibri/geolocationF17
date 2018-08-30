/*
 * index.js
 * Put your JavaScript in here
 */

"use strict;"

/*===========================*/
/* put global variables here */
/*===========================*/

/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	loadScript('initMap');
}

/* 
 our WebApp version had this at the bottom of the body section:

 <script async defer	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAH7e1P_eSIAOa_Q2bNVJJwj1bV43cmsyY&callback=initMap">
	because of the async and defer, we need to generate this after "deviceready"
	and call the google api js url, then call initMap()

	async: this might take a while to load, keep working on loading the DOM
	defer: dont run the script until the DOM is loaded
	src: the url and options
		https://maps.googleapis.com/maps/api/js - what to load
		?key=AIzaSyAH7e1P_eSIAOa_Q2bNVJJwj1bV43cmsyY - my entitlement
		&callback=initMap - once loaded, entitled, and ran, call initMap()

	loadScript, creates the <script> element with the correc info, appends
	it to the end of the <body> tag, and executes it with the callback
 */

function loadScript(callback) {
	var script 		 = undefined;
	var googleAPIKey = "AIzaSyAH7e1P_eSIAOa_Q2bNVJJwj1bV43cmsyY";
	var googleAPIUrl = "https://maps.googleapis.com/maps/api/js";

	var srcURL 		 = googleAPIUrl + '?key=' + googleAPIKey 
							+ '&callback=' + callback;

	script 			 = document.createElement('script');
	script.type 	 = "text/javascript";
	script.async 	 = true;
	script.defer 	 = true;
	script.src 		 = srcURL;

	document.body.appendChild(script);
}

function initMap() {
	var mapElement 		= document.getElementById('mapDiv');
	
	var geoLocationASU 	= {lat: 33.4166317, lng: -111.9341069};
	var mapOptions 		= {zoom: 18, center: geoLocationASU};

	var mapper = new google.maps.Map(mapElement, mapOptions);

	var markerOptions 	= {position: geoLocationASU, map: mapper};
	var marker = new google.maps.Marker(markerOptions);
}