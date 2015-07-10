$(document).ready(function() {

	var shape = $('.shape');

	var shape1 = $('#shape1'),
		shape2 = $('#shape2'),
		shape3 = $('#shape3'),
		shape4 = $('#shape4'),
		shiaLebouf = $('#shiaLebouf');

	shiaLebouf.click(function() {
		shape1.toggleClass('shapeC1')
		shape2.toggleClass('shapeC1')
		shape3.toggleClass('shapeC1')
		shape4.toggleClass('shapeC1')
	})

})