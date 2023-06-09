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

    var mousePressed = false;
    $('.slide-many').mousedown(function() {
        mousePressed = true;
        $('#cursor').addClass('touch_cursor')
    });
    $('.slide-many').mouseup(function() {
        mousePressed = false;
        $('#cursor').removeClass('touch_cursor')
    });

    document.addEventListener("mousemove", (ev) => {
        const x = ev.clientX,
            y = ev.clientY;
        gsap.to("#cursor", {
            duration: 0.2,
            x,
            y
        });
    });
    const images = $('.slide-many');
    for (const image of images) {
        image.addEventListener("mouseenter", (ev) => {
            gsap.to("#cursor", {
                duration: 0.25,
                width: 120,
                height: 120,
                onComplete: function() {
                    $('#cursor').addClass('active');
                }
            });
        });
        image.addEventListener("mouseleave", (ev) => {
            gsap.to("#cursor", {
                duration:0,
                width: 12,
                height: 12,
                onComplete: function() {
                    $('#cursor').removeClass('active');
                }
            });
        });
    }
});