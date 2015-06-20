$(document).ready(function() {

	var card = $('#card');

	var cube = $('#cube');
	var show1 = $('#show1');
	var show2 = $('#show2');
	var show3 = $('#show3');
	var show4 = $('#show4');
	var show5 = $('#show5');
	var show6 = $('#show6');

	card.click(function() {
		$(this).toggleClass('flipped');
	})
	show1.click(function() {
		$(cube).toggleClass('show-front');
	})
	show2.click(function() {
		$(cube).toggleClass('show-back');
	})
	show3.click(function() {
		$(cube).toggleClass('show-right');
	})
	show4.click(function() {
		$(cube).toggleClass('show-left');
	})
	show5.click(function() {
		$(cube).toggleClass('show-top');
	})
	show6.click(function() {
		$(cube).toggleClass('show-bottom');
	})

})