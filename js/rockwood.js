$(document).ready(function () {
	'use strict';
	$('.portfolio-popup-truly-green').magnificPopup({
		items: [
			{
				src: ("#truly-green") // Needs to be dynamically chosen for each block
			},
			{
				src: ("#truly-green-gallery-1")
			}
		],
		type: "inline",
		gallery: {
			enabled: true
		}
	});

	//$('.navbar-brand')

	/*
	$(".boxLink").click(function(){
		window.location = $(this).find("a").attr("href");
		return false;
	});*/
});
