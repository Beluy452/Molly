$(document).ready(function () {
    

    $('menu a[href^="#"]').on('click', function(event){
        event.preventDefault();
        var anchor = this.hash;
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 110
        }, 2500);
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

   // Mobile Navigation
    $('.nav-bar').click(function () {
        $('menu').slideToggle('Open');
    })
    $('menu a').click(function () {
        if($(document).width() <676){
            $('menu').slideToggle('Open');
        }
    })


});