$(document).ready(function() {
	// jQuery stuff goes here
	
	/*=========================== 
	=		Menu controller		=
	===========================*/
	$('#menu_btn').click(function() {
		$('#nav').slideToggle();
	})




			// Testing document.width
			$('#nav_order_online').on("click", function() {
				
				alert("window width: " + $(window).width() + ", document width: " + $(document).width())
			})




	/*=========================================== 
	=		Lock nav for higher viewports		=
	===========================================*/
	//Read window resize inputs
	$(window).resize(function() {
		var hasDroppedBelowBefore;
		// If window doesn't have a nav button, make nav visible
		if ($(window).width() > 465) {
			$('nav').slideDown();
			hasDroppedBelowBefore == undefined;
		};

		// When dropping to lowest viewport, hide nav

		if ($(window).width() < 466) {
			if (hasDroppedBelowBefore == undefined) {
				$('nav').hide();
				hasDroppedBelowBefore = "1";
			}
		}
	})




	/*=============================== 
	=		Lock nav to fixed		=
	===============================*/
	// Read scroll inputs
	$(document).on("scroll", function() {

		// Calculate head height
		var navY = $('#nav').height();
		var headY = $('header').height();
		
		// Has the scroll function passed the header?
		if($(this).scrollTop()>=headY){

			//Yes
			// Make sure we're not in the small viewport
			if($(document).width() > 465) {
				
				// if not in small viewport, snap nav
				$('nav').addClass('nav_fixed');
				
				// adjust content that might be offset
				$('#content_body').css({"margin-top": navY + "px"});

			} else {
				//don't do anything - small viewport
			}
		} else {

			//unsnap nav and remove margin-top from content_body
			$('nav').removeClass('nav_fixed');
			$('#content_body').css({"margin-top": "0px"});
		}
	})
})

/*	 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
	|		THINGS TO DEBUG: 		|
	 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	 • When resizing window in small viewport, nav disappears
	 • When nav is adjusting to med height and moved back,
	 	small viewport automatically drops nav
	 • When scrolled down some, resizing from small to med
	 	loses nav bar until scroll
	 • When nav bar is lost, if dropping back to smallest
	 	viewport, nav starts UNDER header.
	 	Scrolling back to top is only fix







*/
