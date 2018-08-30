/*
 * index.js
 * Copyright 2017 by Dan Mazzola and ABOR
 */

"use strict;"

const logoArray = [ './img/asu_fork150x150.png',
					'./img/asu_sparky150x150.png',
					'./img/asu_name150x150.png',
					'./img/asu_seal150x150.png'   ];

var index 		= 0;
var logoElement = undefined;

/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	alert('onDeviceReady');
	logoElement = document.getElementById('logo');
	nextLogoImage();
}

function nextLogoImage() {
	logoElement.src = logoArray[index];
	index++;

	if (index === logoArray.length) {
		index = 0;
	}
}