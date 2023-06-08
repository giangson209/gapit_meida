$( document ).ready(function() {
    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1200,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 100,
        touchpadSupport: true,
        fixedBackground: true
    });

    setTimeout(function() {
        $('.header-pc').addClass('load-head');
    }, 600);


    $(".btn-bar-menu a").click(function(){
        $('.mm-menu-mobile, .mm-menu-link ul li a').addClass('active');
    });

    $(".close-menu a").click(function(){
        $('.mm-menu-mobile, .mm-menu-link ul li a').removeClass('active');
    });

    // scroll header
    var previousScroll = 0;
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
            if (currentScroll > previousScroll) {
                window.setTimeout(hideNav, 50);
            } else {
                window.setTimeout(showNav, 50);
            }
            previousScroll = currentScroll;
        }
    });
    function hideNav() {
        $(".header-pc").addClass("is-hidden");
    }
    function showNav() {
        $(".header-pc").removeClass("is-hidden");
    }
    // end scroll header
});