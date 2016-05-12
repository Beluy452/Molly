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

        //progres bar
    // var bar = new ProgressBar.Line(progress-bar, {
    //   strokeWidth: 4,
    //   easing: 'easeInOut',
    //   duration: 7400,
    //   color: '#FEE400',
    //   trailColor: '#eee',
    //   trailWidth: 4,
    //   svgStyle: {width: '100%', height: '100%'},
    //   text: {
    //     style: {
    //       // Text color.
    //       // Default: same as stroke color (options.color)
    //       color: '#000',
    //       position: 'absolute',
    //       right: '0',
    //       top: '-1px',
    //       padding: 0,
    //       margin: 0,
    //       transform: null
    //     },
    //     autoStyleContainer: false
    //   },
    //   from: {color: '#FFEA82'},
    //   to: {color: '#ED6A5A'},
    //   step: (state, bar) => {
    //     bar.setText(Math.round(bar.value() * 100) + ' %');
    //   }
    // });

    // bar.animate(0.90);  // Number from 0.0 to 1.0


});