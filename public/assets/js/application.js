$(document).ready(function(e) {
    var o = e(".nav-toggle"),
        t = e(".nav-menu");
    o.click(function() {
        e(this).toggleClass("is-active"), t.toggleClass("is-active")
    })
}), $('a[href^="#"]').on("click", function(e) {
    var o = $(this.getAttribute("href"));
    o.length && (e.preventDefault(), $("html, body").stop().animate({
        scrollTop: o.offset().top
    }, 2e3))
}), Macy.init({
    container: ".gallery",
    trueOrder: !1,
    waitForImages: !1,
    margin: 24,
    columns: 5,
    breakAt: {
        1200: 5,
        940: 3,
        520: 2,
        400: 1
    }
}), $(".swipebox").swipebox({
    useCSS: !0,
    useSVG: !0,
    initialIndexOnArray: 0,
    hideCloseButtonOnMobile: !1,
    removeBarsOnMobile: !0,
    hideBarsDelay: 3e3,
    videoMaxWidth: 1140,
    beforeOpen: function() {},
    afterOpen: null,
    afterClose: function() {},
    loopAtEnd: !1
}), $.cookieBar = function(e) {
    $(".hero-head").prepend('<section class="hero is-danger is-small"><div style="font-size: 12px; margin: 5px 0; padding: 0px 75px; line-height: 15px;" class="cookie-message"><p>Actively seeking <em><b>product management</b></em> contracts and full time positions. <a style="color:#fff" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#101;&#64;&#105;&#97;&#109;&#109;&#97;&#116;&#116;&#104;&#105;&#97;&#115;&#46;&#99;&#111;&#109;"><u>Get in touch</u></a> or say "hello" to <a style="color:#fff" href="/bot"><u>MatthiasBot!</u></a><br><br><a style="color:#fff;" class="my-close-button" href><u>CLOSE</u></a></p></div></section>'), $(".cookie-message").cookieBar({
        closeButton: ".my-close-button"
    })
}, $.cookieBar(), $("img.lazy").lazyload();
