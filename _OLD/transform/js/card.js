$(document).ready(function() {
	var card = $('#card');

	card.click(function() {
		$(this).toggleClass('flipped');
	})
})