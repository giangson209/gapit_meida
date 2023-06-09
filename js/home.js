$( document ).ready(function() {
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

    $('.slide-partner').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        nextArrow: '',
        prevArrow: '',
    });

    $('.slide-article').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '',
        prevArrow: '',
    });

    gsap.registerPlugin(ScrollTrigger);

    // let tl2 = gsap.timeline();
    // tl2.to(".line-text-scroll", {
    //     x:1000,
    //     duration:50,
    //     repeat:-1,
    //     ease:'linear'
    // })
    // let tl = gsap.timeline();

    const tl = new TimelineMax();
    tl.to('.line-text-scroll', {
        xPercent:7,
        scrollTrigger:{
            trigger:".line-text-scroll",
            scrub:1
        }
    })
});