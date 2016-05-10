$(document).ready(function () {
    // resizeDiv();
    // function resizeDiv() {
    //     vpw = $(window).width();
    //     vph = $(window).height();

    //     $('.text-slide').css({'top': vph * 0.07 + "%"});
    //     $('.text-slide1 a ').css({'padding-left': vpw * 0.02 + "px"});
    //     $('.text-slide1 a ').css({'padding-right': vpw * 0.02 + "px"});
    //     $('.right-blok button ').css({'margin-right': vpw * 0.04 + "px"});
    // }

    $('menu a[href^="#"]').on('click', function(event){
        event.preventDefault();
        var anchor = this.hash;
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 110
        }, 1500);
        console.log('ok');
        
    });//scroll якорів

    // Header Scroll
   $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });



});