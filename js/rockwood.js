$(document).ready(function () {
	'use strict';
	$('.portfolio-popup-parent').magnificPopup({
		items: [
			{
				src: ("#my-popup") // Needs to be dynamically chosen for each block
			},
			{
				src: ("#my-gallery-1")
			}
		],
		type: "inline",
		gallery: {
			enabled: true
		}
	});

	$('.navbar-brand')
});
