// mobile menu drop down

jQuery(document).ready(function ($) {

  var $toggle = $('.nav-toggle');
  var $menu = $('.nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });
});

// scroll on click


$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

  $('html, body').stop().animate({
 'scrollTop': $target.offset().top
}, 900, 'swing');
});


// bottom footer active link

$('li > a').click(function() {
    $('li').removeClass();
    $(this).parent().addClass('is-active');
});

$("#footer-nav").scrollspy({ offset: -75 });


//macy

Macy.init({
    container: '.gallery',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 6,
    breakAt: {
        1200: 5,
        940: 3,
        520: 2,
        400: 1
    }
});


// swipebox

$( '.swipebox' ).swipebox( {
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		removeBarsOnMobile : true, // false will show top bar on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars on desktop
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: false // true will return to the first image after the last image is reached
	} );

// cookiebar
$.cookieBar = function( options ) {
$('.hero-head').prepend('<section class="hero is-danger is-small"><div style="font-size: 10px; margin: 5px 0; padding: 5px 75px;" class="cookie-message"><p style="line-height: 5%;">Actively seeking <em><b>product management</b></em> contracts and full time positions. <a style="color:#fff" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#101;&#64;&#105;&#97;&#109;&#109;&#97;&#116;&#116;&#104;&#105;&#97;&#115;&#46;&#99;&#111;&#109;"><u>Get in touch</u></a> or say "hello" to <a style="color:#fff" href="/bot"><u>MatthiasBot!</u></a></p><br><a style="color:#fff;" class="my-close-button" href><u>CLOSE</u></a></div></section>');
$('.cookie-message').cookieBar({ closeButton : '.my-close-button' });
};

$.cookieBar();


$("img.lazy").lazyload();
