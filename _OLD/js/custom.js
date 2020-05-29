$(document).ready(function() {

/*======================o
|		VARIABLES		|
o======================*/

	var mymy = $('#my1');

		mymyFull = $('#mymy_container'),
		breathe = $('#breathe'),

		internet = $('#internet'),
		spongebob = $('#spongebob'),
		projectListContainer = $('#project_list_container'),
		projectListItem = $('.project_list_item'),
		socialContainer = $('#social_container'),
		socialIcon = $('.socialIcon'),

		winWidth = $(window).height(),
		winHeight = $(window).width(),

		winWidthToggle = 0,
		winHeightToggle = 0;

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

				breathe.remove();
				mymyFull.remove();

				projectListContainer.css({
					'height' : '90%',
					'width' : '80%',
					'margin' : '2.5% 0',
					'padding' : '2.5% 0'
				})

				projectListItem.css({
					'font-size' : '30px'
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
					'font-size' : '30px'
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