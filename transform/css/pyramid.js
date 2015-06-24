
$(document).ready(function() {

	var btn1 = $('#btn1');
	var btn2 = $('#btn2');
	var btn3 = $('#btn3');
	var btn4 = $('#btn4');

	var pyramid = $('#pyramid');
	var container = $('.container');

	var btn1clicked = 0;
	var btn2clicked = 0;
	var btn3clicked = 0;
	var btn4clicked = 0;
	var btn5clicked = 0;
	var btn6clicked = 0;
	var btn7clicked = 0;
	var btn8clicked = 0;
	var btn9clicked = 0;

	var perspectiveValue = $('#perspective');
	var attrSubmit = $('#submit');

	attrSubmit.click(function() {
		perspectiveVal = perspectiveValue.val();
			container.css({
				'perspective': perspectiveVal+'px'
			})
	})


	btn1.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-1');
	})
	btn2.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-2');
	})
	btn3.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-3');
	})
	btn4.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-4');
	})
	btn5.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-5');
	})
	btn6.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-6');
	})
	btn7.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-7');
	})
	btn8.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-8');
	})
	btn9.click(function() {
		pyramid.removeClass();
		pyramid.addClass('show-9');
	})
})