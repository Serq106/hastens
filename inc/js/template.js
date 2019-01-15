
(function ($) {



    $(document).ready(function () {

        $('.mobile-menu').click(function () {

            $(this).toggleClass('active');

            $('.head-menu').slideToggle();

        })

    })

    var callback = function () {
		
		$('.callback.text').css('color', '#000330');
		$('.callback.text').css('background', '#ffffff');

        $('#callback').css({"visibility": "visible"});

        $('.modal-wrapper').addClass('open');

        $('.modal-block').css({"visibility": "visible"});

        var service = $(this).siblings('.item-name').text();

        $('#callback input[name="service"]').val(service);

    }

    var closeModal = function () {
		
		$('.callback.text').css('color', '#fff');
		$('.callback.text').css('background', 'none');
        $('.modal-wrapper').removeClass('open');
        $('.modal-wrappers').removeClass('open');
        $("img").removeClass('hidde');
        window.setTimeout(function () {

            $('.modal-block').show().css({"visibility": "hidden"});

        }, 500);

    }
	
		$(document).on('click', '.close', closeModal);


    var showThank = function () {

        window.setTimeout(function () {

            $('#thank').show().css({"visibility": "visible"});

            $('.modal-wrapper').addClass('open');


        }, 1500);

        window.setTimeout(function () {

            $('#thank').show().css({"visibility": "hidden"});

            $('.modal-wrapper').removeClass('open ');
            $('.modal-wrappers').removeClass('open');
            $("img").removeClass('hidde');


        }, 6000);


    }
    $(document).on('click', ".callback", callback);

    $(document).on('click', function (event) {

        if ($('.modal-wrapper').hasClass('open')) {

            var item = $(event.target);

            if (item.closest('.modal-wrapper').length != 0 && item.closest('.modal-block').length == 0) {

                closeModal()

            }
        }
        if ($('.modal-wrappers').hasClass('open')) {

            var item = $(event.target);

            if (item.closest('.modal-wrappers').length != 0 && item.closest('.modal-block').length == 0) {

                closeModal()
                $("img").removeClass('hidde');

            }
        }

    })
    $(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm   = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });
    $(function(){
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });

})(jQuery)

$(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
        autoplay: true, // time for slides changes
        autoplayTimeout : 7000,
        smartSpeed: 2000, // duration of change of 1 slide
        responsiveClass:true,
        responsive: {
            320: {
                items: 1
            },
            560: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
});