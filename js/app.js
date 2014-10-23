/* app.js
* main script file for our little application
* */

"use strict";

$(function() {
    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var jqWin = $(window);
    var navPlaceholder = $('.nav-placeholder');
    navPlaceholder.height(navHeight);

    $(window).scroll(function() {
        var scrollPos = jqWin.scrollTop();
       //console.log(scrollPos);
        if(scrollPos > navTop) {
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceholder.hide();
        }
    });

    //add jquery library in index.html
    //select all hyperlinks in section element, open in new tags
    $('section a[class!="back-to-top"]').attr('target', '_blank');

    $('section').hide().fadeIn(1000);

    $('nav a, a[class="back-to-top"]').click(function(eventObject) {
        console.log(this.hash);
        var targetElement = $(this.hash);
        var targetTop = targetElement.offset().top;

        $('html,body').animate({scrollTop: targetTop - navHeight - 10}, 700);

        eventObject.preventDefault();
    });
});


