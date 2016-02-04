$(function() {
	var $button = $('section.gallery .button-wrap');

	$('.fotorama').hide();
	$button.hide();

	// Gallery Show 
	$('.container div').on('click', function () {
		var category = $(this).attr('rel');
		
		$(this).parent('div').hide();
		$('#'+category).show();
		setTimeout(function() {
			$('#'+category).fotorama();
		}, 1000);
		setTimeout(function() {
			$button.show();
			$('.button-wrap button').fadeIn('slow');
		}, 1500);
	});

	// Gallery Back Button
	$('.button-wrap button').on('click', function () {
		$(this).hide();
		$('.fotorama').hide();
		$('section.gallery .container').show();
	});

});