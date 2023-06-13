
$(document).ready(function(){

    const images = $('.slide-many');
    for (const image of images) {
        image.addEventListener("mouseenter", (ev) => {
            gsap.to("#cursor", {
                duration: 0.2,
                scale: 10,
                onComplete: function() {
                    // $('#cursor').addClass('active');
                }
            });
        });
        image.addEventListener("mouseleave", (ev) => {
            gsap.to("#cursor", {
                duration:0,
                width: 12,
                height: 12,
                scale: 1,
                onComplete: function() {
                    // $('#cursor').removeClass('active');
                }
            });
        });
    }

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".item-make",
        duration: 1100,
        offset: -500,
    })
        .setTween(".make-1", {x: "-=80%"})
        .addTo(controller);

    var controller_1 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".item-make",
        duration: 1300,
        offset: -500,
    })
        .setTween(".make-2", {x: "-=68%"})
        .addTo(controller_1);


    var controller_2 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".item-make",
        duration: 1300,
        offset: -500,
    })
        .setTween(".make-3", {x: "-=56%"})
        .addTo(controller_2);

    var controller_3 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".item-make",
        duration: 1300,
        offset: -500,
    })
        .setTween(".make-4", {x: "-=44%"})
        .addTo(controller_3);

    var a = 0;
    $(window).scroll(function () {
        var oTop = $("#counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop + 100) {
            $(".counter").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate(
                    {
                        countNum: countTo
                    },
                    {
                        duration: 2500,
                        easing: "swing",
                        step: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString()
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString()
                            );
                        }
                    }
                );
            });
            a = 1;
        }
    });
    // end counter

    $('.slide-many').slick({
        autoplay:false,
        arrow:false,
        centerMode: true,
        slidesToShow: 1.66,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '',
        prevArrow: '',
    });

    window.addEventListener('load', anm_strive);
    window.addEventListener('scroll', anm_strive);
    function anm_strive() {
        if (document.querySelectorAll('lottie-player').length > 0) {
            var windowHeight = window.innerHeight,
                videoEl = document.querySelectorAll('lottie-player');
            for (var i = 0; i < videoEl.length; i++) {
                var thisVideoEl = videoEl[i],
                    videoHeight = thisVideoEl.clientHeight,
                    videoClientRect = thisVideoEl.getBoundingClientRect().top;
                if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                    thisVideoEl.play();
                } else {
                    thisVideoEl.stop();
                }
            }
        }
    }

});

