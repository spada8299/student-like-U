'use strict';

$(document).ready(function() {
	$('.btn').click(function () {
		var otherBtn = $(this).parents('.question-content').children('.btn').not(this);
	    $(this).children(".fa-caret-up").fadeIn();
	    otherBtn.children('.fa-caret-up').hide();
	});
	// if ( $('.btn').hasClass('.active') ) {
	// 	$('.btn').children('.fa-caret-up').slideUp();
	// } else {
	// 	$('.btn').children('.fa-caret-up').hide();
	// }
});