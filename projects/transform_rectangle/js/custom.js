$(document).ready(function() {

	var btn1 = $('#btn1');
	var btn2 = $('#btn2');
	var btn3 = $('#btn3');
	var btn4 = $('#btn4');
	var btn5 = $('#btn5');
	var btn6 = $('#btn6');

	var rect = $('#rect');
	var container = $('.container');

	var btn1clicked = 0;
	var btn2clicked = 0;
	var btn3clicked = 0;
	var btn4clicked = 0;
	var btn5clicked = 0;
	var btn6clicked = 0;

	var perspectiveValue = $('#perspective');
	var attrSubmit = $('#submit');

	attrSubmit.click(function() {
		perspectiveVal = perspectiveValue.val();
			container.css({
				'perspective': perspectiveVal+'px'
			})
	})


	btn1.click(function() {
		rect.toggleClass('show-front');
		if (btn1clicked == 0) {
			btn1.text('on')
			btn1clicked = 1;
		} else {
			btn1.text('off')
			btn1clicked = 0;
		}
	})
	btn2.click(function() {
		rect.toggleClass('show-back');
		if (btn2clicked == 0) {
			btn2.text('on')
			btn2clicked = 1;
		} else {
			btn2.text('off')
			btn2clicked = 0;
		}
	})
	btn3.click(function() {
		rect.toggleClass('show-right');
		if (btn3clicked == 0) {
			btn3.text('on')
			btn3clicked = 1;
		} else {
			btn3.text('off')
			btn3clicked = 0;
		}
	})
	btn4.click(function() {
		rect.toggleClass('show-left');
		if (btn4clicked == 0) {
			btn4.text('on')
			btn4clicked = 1;
		} else {
			btn4.text('off')
			btn4clicked = 0;
		}
	})
	btn5.click(function() {
		rect.toggleClass('show-top');
		if (btn5clicked == 0) {
			btn5.text('on')
			btn5clicked = 1;
		} else {
			btn5.text('off')
			btn5clicked = 0;
		}
	})
	btn6.click(function() {
		rect.toggleClass('show-bottom');
		if (btn6clicked == 0) {
			btn6.text('on')
			btn6clicked = 1;
		} else {
			btn6.text('off')
			btn6clicked = 0;
		}
	})
})