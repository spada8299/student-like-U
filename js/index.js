'use strict';

$(document).ready(function() {
	$('.start-btn').click(function() {
		$('#page1').hide();
		$('#page2').fadeIn();
	});
	$('.report-btn').click(function() {
		$('#page2').hide();
		$('#page3').fadeIn();
		$('#result').text($('#total').text());
	});

	$('.btn').click(function () {
		var otherBtn = $(this).parents('.question-content').children('.btn').not(this);
		var qNum = $(this).parents('.tab-pane').attr("id");
		console.log($('a[href=\'#'+ qNum +'\']'));
	    $(this).children(".fa-caret-up").fadeIn();
	    otherBtn.children('.fa-caret-up').hide();
	    $('a[href=\'#'+ qNum +'\'] span i').addClass('fa fa-check');
	    $('.nav-tabs > .active').next('li').find('a').trigger('click');
	});

	$('.next-btn').click(function() {
		$('.nav-tabs > .active').next('li').find('a').trigger('click');
	});
	$('.pre-btn').click(function() {
		$('.nav-tabs > .active').prev('li').find('a').trigger('click');
	});

	$('.btns button').click(function() {
		$(this).addClass('chosen');
		$('.btns button').not(this).removeClass('chosen');
		$('#hint').hide();
	});
	$('#dateBtn').click(function() {
		$('#jajaBtn').slideDown();
	});
	$('.btns button').not('#dateBtn, #jajaBtn').click(function() {
		$('#jajaBtn').slideUp();
	});

	$('#myModal').on('show.bs.modal', function(e) {
		
	});
});