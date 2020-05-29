$(document).ready(function() {var galleryBtn = $('.gallery_btn');

	galleryBtn.click(function(event){
		if(event.target.id == 'gallery_prev') {
			alert('prev')
		} else if(event.target.id == 'gallery_next') {
			alert('next')
		}
	});

})