$(document).ready(function() {

	var mymy = $('#my1');
	var internet = $('#internet');
	var spongebob = $('#spongebob');
	var projectListContainer = $('#project_list_container');
	var projectListItem = $('.project_list_item')

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

})