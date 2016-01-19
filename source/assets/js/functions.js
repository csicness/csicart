$(function() {

	$('.galleria').hide();
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
		$('.galleria').hide();
		$('section.gallery .container').show();
	});

	
	// Galleria
  	Galleria.configure({
  		reponsive: true,
  		imageMargin: 50,
  		wait: true
  	});

  	Galleria.loadTheme('galleria/themes/twelve/galleria.twelve.js');

	Galleria.run('.galleria');

});