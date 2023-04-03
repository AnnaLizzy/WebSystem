jQuery.noConflict();
jQuery(document).ready(
    function ($) {
        var $ = jQuery.noConflict();
        $(document).ready(function($) {
            "use strict";
            
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });
        });
    }
);