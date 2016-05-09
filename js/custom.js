$(document).ready(function () {
    resizeDiv();
    function resizeDiv() {
        vpw = $(window).width();
        vph = $(window).height();

        $('.text-slide').css({'top': vph * 0.07 + "%"});
        $('.text-slide1 a ').css({'padding-left': vpw * 0.02 + "px"});
        $('.text-slide1 a ').css({'padding-right': vpw * 0.02 + "px"});
        $('.right-blok button ').css({'margin-right': vpw * 0.04 + "px"});
    }

    $('.price-room a[href^="#"]').on('click', function(event){
        event.preventDefault();
        var anchor = this.hash;
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 110
        }, 1500);
        console.log('ok');
        
    });//scroll якорів
   

    // // browser window scroll (in pixels) after which the "menu" link is shown
    // var offset = 300;

    var navigationContainer = $('#cd-nav'),
        mainNavigation = navigationContainer.find('#cd-main-nav ul');

    // //hide or show the "menu" link
    // checkMenu();
    // $(window).scroll(function () {
    //     checkMenu();
    // });

    //open or close the menu clicking on the bottom "menu" link
    $('.cd-nav-trigger').on('click', function () {
        $(this).toggleClass('menu-is-open');
        //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
        mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

    });

    function checkMenu() {
        if ($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
            navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                mainNavigation.addClass('has-transitions');
            });
        } else if ($(window).scrollTop() <= offset) {
            //check if the menu is open when scrolling up
            if (mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
                //close the menu with animation
                mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    //wait for the menu to be closed and do the rest
                    mainNavigation.removeClass('is-visible is-hidden has-transitions');
                    navigationContainer.removeClass('is-fixed');
                    $('.cd-nav-trigger').removeClass('menu-is-open');
                });
                //check if the menu is open when scrolling up - fallback if transitions are not supported
            } else if (mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
                mainNavigation.removeClass('is-visible has-transitions');
                navigationContainer.removeClass('is-fixed');
                $('.cd-nav-trigger').removeClass('menu-is-open');
                //scrolling up with menu closed
            } else {
                navigationContainer.removeClass('is-fixed');
                mainNavigation.removeClass('has-transitions');
            }
        }
    }


});