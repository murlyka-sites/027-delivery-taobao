$(document).ready(function(){
	svg4everybody();

	// $(".header-sticky").sticky({topSpacing:0, zIndex: 10});

	$(".slider_main").slick({
		arrows: false,
		dots: true
	});

	$(".slider_rec").each(function() {
		$(this).slick({
			slidesToShow: 4,
			arrow: false,
			dots: false,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}]
		})
	})

	$(".slider_news").slick({
		slidesToShow: 3,
		arrows: false,
		dots: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}]
	})
});
