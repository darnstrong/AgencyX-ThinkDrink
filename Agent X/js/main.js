

// JavaScript Document

(function() {
	"use strict";

//variables

var imageBanner = document.querySelector("#galleryImages");
var listItems = document.querySelectorAll(".navcon");
var offSet = 600;

//functions

function moveBanner(){

imageBanner.style.right = (offSet*this.dataset.offset) + "px";
}
	

//listeners

for(var i=0; i<listItems.length; i++){
	
listItems[i].addEventListener("click", moveBanner,false);
}
 	
})();




