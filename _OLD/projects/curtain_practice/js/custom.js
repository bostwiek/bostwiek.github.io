$(document).ready(function() {

	var dice = $('#dice'),
		scrollPos = 0,
		diceCounter = 0,
		
		// need to figure out height of each container
		windowHeight = $(window).height();
		// and adjust if window is resized
		$(window).on("resize", function() {
			windowHeight = $(window).height();
		})


	/*********************
	Required function call
	*********************/
		$('.curtains').curtain({
	        scrollSpeed: 120,
	        controls: '.menu',
        	curtainLinks: '.curtain-links',


	/**********************************************
			Panels can be added dynamically
					by calling this...
	$('.curtains').data('plugin_curtain').insert()
					pretty cool stuff
	**********************************************/

			/*==============================o
			|	Do every time slide changes	|
			o==============================*/

			nextSlide: 	function() {
				// stuff to do when reaching next slide
				if(diceCounter == 0) {
					dice.animate({
						'left': $(window).width()+'px'
					}, 500);
					diceCounter = 1
				} else {
					dice.animate({
						'left': '-150px'
					}, 500);
					diceCounter = 0
				}

				//read position in scroll
				scrollPos = $(window).scrollTop();

				//depending on frame, doSomething()
				doSomething();
					
				},
			
			prevSlide: function() {
				// stuff to do when reaching previous slide
				if(diceCounter == 0) {
					dice.animate({
						'left': $(window).width()+'px'
					}, 500);
					diceCounter = 1
				} else {
					dice.animate({
						'left': '-150px'
					}, 500);
					diceCounter = 0
				}
				doSomething()
			}

			/*======================================o
			|	Specific functions for each slide	|
			o======================================*/




	    //end curtain code
		});

	function doSomething() {
		
		// Check what frame we're on
		var whereAmI = $(window).scrollTop() / windowHeight;
		alert( whereAmI )
			// If on frame 1

			// If on frame 2

			// If on frame 3


	}
// end document.ready()
})