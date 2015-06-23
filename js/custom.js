$(document).ready(function() {

/*======================o
|		VARIABLES		|
o======================*/

	var mymy = $('#my1');

	var mymyFull = $('#mymy_container');
	var breathe = $('#breathe');

	var internet = $('#internet');
	var spongebob = $('#spongebob');
	var projectListContainer = $('#project_list_container');
	var projectListItem = $('.project_list_item');
	var socialContainer = $('#social_container');
	var socialIcon = $('.socialIcon');

	var winWidth = $(window).height();
	var winHeight = $(window).width();

	var winWidthToggle = 0;
	var winHeightToggle = 0;

/*==========================o
|		FLOATING TEXT		|
o==========================*/

	mymy.click(function() {
		$(this).text('REDRUM').delay(3200).slideUp(3500)
		$(this).css({'color':'red'})
	})
	internet.click(function() {

		$(this).text('spongebob');
		spongebob.animate({
			'top': '-200px'
		}, 5000)
		spongebob.delay()
		spongebob.animate({
			'top': '-500px'
		})
	})

/*==========================o
|	PROJECT LIST CONTAINER	|
o==========================*/

	projectListContainer.mouseover(function() {
		$(this).addClass('border_radius_dance')
	})
	projectListContainer.mouseout(function() {
		$(this).removeClass('border_radius_dance')
	})

	projectListItem.mouseover(function() {
		$(this).removeClass('list_item_idle')
		$(this).addClass('list_item_dance')
	})
	projectListItem.mouseout(function() {
		$(this).addClass('list_item_idle')
		$(this).removeClass('list_item_dance')
	})

	socialContainer.mouseover(function() {
		socialIcon.css({
			'height': '60px',
			'width': '60px'
		})
	})
	socialContainer.mouseout(function() {
		socialIcon.css({
			'height': '40px',
			'width': '40px'
		})
	})

/*==========================o
|		MOBILE CHECKER		|
o==========================*/

function mobile_detector(){
     var mobile =(/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
     var userAgent = navigator.userAgent.toLowerCase();
     if (mobile) {

				winWidthToggle = 1;

				breathe.toggle();
				mymyFull.toggle();

				projectListContainer.css({
					'height' : '90%'
				})

				projectListItem.css({
					'font-size' : '40px'
				})

     }
}
mobile_detector();

/*==============================o
|		VIEWPORT CHECKER		|
|			(ON LOAD)			|
o==============================*/
	
	// width button
	// comment this out after..
	/*
	$('#width_button').click(function() {
		alert($(window).width())
	})
	*/
	if ($(window).width() <= 700) {

				winWidthToggle = 1;

				breathe.fadeToggle("slow");
				mymyFull.fadeToggle("slow");

				projectListContainer.delay(1000).animate({
					'height' : '90%'
				}, 1500)

				projectListItem.delay(1000).animate({
					'font-size' : '40px'
				}, 1500)
	}

/*==========================o
|		RESIZE LISTENER		|
o==========================*/

	$(window).on("resize", function() {

		//If queued up more than 1 action, 
		//return without adding anything else

		if ($('div').queue().length >= 1) {
			return;
		}

		if ($(this).width() <= 700) {
			if (winWidthToggle == 0) {

				winWidthToggle = 1;

				breathe.fadeToggle("slow");
				mymyFull.fadeToggle("slow");

				projectListContainer.delay(1000).animate({
					'height' : '90%'
				}, 1500)

				projectListItem.delay(1000).animate({
					'font-size' : '40px'
				}, 1500)


			}
		}
		if ($(this).width() > 700) {
			if (winWidthToggle == 1) {
				winWidthToggle = 0;

				breathe.delay(1000).fadeToggle("slow");
				mymyFull.delay(1000).fadeToggle("slow");

				projectListContainer.animate({
					'height' : '30%'
				}, 1500)
				projectListItem.delay().animate({
					'font-size' : '25px'
				}, 1500)
			}
		}
 	})

 	//end logic
})