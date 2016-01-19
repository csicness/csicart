(function($) {

	var $circle = $('#circle');
	var $mobileNav = $('#mobile-nav-toggle');
	var $navToggler = $('#x, #y, #z');
	var $list = $('#menu li');
	var $link = $('#menu ul li a');

	function openNav() {
		$mobileNav.addClass('open');
		$('.mobile-wrapper').css('position', 'fixed');
		$navToggler.addClass('collapse');
		$('#y').hide();
		$circle.addClass('expand');
		$list.addClass('animate');

		setTimeout(function() {
			$('#x').addClass('rotate30');
			$('#z').addClass('rotate135');
		}, 200);

		setTimeout(function() {
			$('#x').addClass('rotate45');
			$('#z').addClass('rotate150');
		}, 300);
	}

	function closeNav() {
		$mobileNav.removeClass('open');
		$('.mobile-wrapper').css('position', 'absolute');
		$navToggler.removeClass('collapse');
		$('#y').show();
		$circle.removeClass('expand');
		$list.removeClass('animate');

		setTimeout(function() {
			$('#x').removeClass('rotate30');
			$('#z').removeClass('rotate135');
		}, 300);

		setTimeout(function() {
			$('#x').removeClass('rotate45');
			$('#z').removeClass('rotate150');
		}, 200);
	}

	function bindings() {
		// Mobile Nav Toggle
		$mobileNav.on('click', function() {
			if(!$(this).hasClass('open')) {
				openNav();
			} else {
				closeNav();
			}
		});

		// Mobile Nav Link Click
		$link.on('click', closeNav);
	}

	$(document).ready(function() {
		bindings();
	});

})(jQuery);