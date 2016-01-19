(function($) {

	"use scrict";

	var $body,
		$window,
		$list,
		$sections,
		$nav,
		settings = {
			duration: 700
		};

	function navActive(e) {
		var $this = $(this);

		$this.siblings().removeClass('active');
		$this.addClass('active');
	}

	function onNavLinkClick(e) {
		var $this = $(this),
			href = $this.attr('href'),
			$target = $(href);

		if ($target.length === 0)
			return;

		e.preventDefault();

		$body.animate({
			scrollTop: $target.offset().top
		}, settings.duration);
	}

	function winScroll(e) {
		var nav_height = $nav.outerHeight(),
			cur_pos = $(this).scrollTop();

		$sections.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				$nav.find('li').removeClass('active');
				$nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
			}
		});
	}

	function bindings() {
		// Navi Class
		$list.on('click', navActive);
		// Smooth scroll (smoothScroll)
		$('a[href^="#"]').on('click', onNavLinkClick);
		// Window scroll nav change
		$window.on('scroll', winScroll);
	}

	$(document).ready(function() {
		// Variable Def
		$body = $('html, body');
		$window = $(window);
		$sections = $('.home-sections section');
		$nav = $('header nav');
		$list = $('nav ul li');

		// Call Functions
		bindings();
	});

})(jQuery);