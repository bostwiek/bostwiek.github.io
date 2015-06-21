$(document).ready(function() {

	var mymy = $('#my1');

	var mymyFull = $('#mymy_container');
	var breathe = $('#breathe');

	var internet = $('#internet');
	var spongebob = $('#spongebob');
	var projectListContainer = $('#project_list_container');
	var projectListItem = $('.project_list_item')

	var winWidth = $(window).height();
	var winHeight = $(window).width();

	var winWidthToggle = 0;
	var winHeightToggle = 0;

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

	$(window).on("resize", function() {
		if ($(this).width() <= 700) {
			if (winWidthToggle == 0) {
				winWidthToggle = 1;

				breathe.fadeToggle("slow");
				mymyFull.fadeToggle("slow");

				projectListContainer.delay(1000).animate({
					'height' : '90%'

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
			}
		}
 	})


	//when resizing window

		//check if window is < 500px

			//if yes, breathe + mymy fadeOut


})