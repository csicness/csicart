$(function() {

	$('.fotorama').hide();
	$('section.gallery button').hide();

	// Gallery Show 
	$('.container div').on('click', function () {
		var category = $(this).attr('rel');
		$(this).parent('div').hide();
		$('#'+category).show();
		$('section.gallery button').show();
	});

	// Gallery Back Button
	$('section.gallery button').on('click', function () {
		$(this).hide();
		$('.fotorama').hide();
		$('section.gallery .container').show();
	});

});