$(document).ready(function () {

  $('.trigger').click(function (event) {
    event.preventDefault();
    $('.hidden-block').toggle('Open');
        // $('.show-more').hide();
    });

  $('.trigger-blog').click(function (event) {
    event.preventDefault();
    $('.hidden-block-blog').toggle('Open');
    });

  $('.trigger-description').click(function (event) {
    event.preventDefault();
     $(this).prev().toggle('fast');
   
    });

// $(this).find('.hidden-blog-description').toggle('Open');
 

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

        if (scroll >= 250) {
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