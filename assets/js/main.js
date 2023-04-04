jQuery.noConflict();
jQuery(document).ready(
    function ($) {
        var $ = jQuery.noConflict();
        $(document).ready(function($) {
            "use strict";
      
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