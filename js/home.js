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
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.slide-article').slick({
        autoplay:false,
        arrow:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '',
        prevArrow: '',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
        ],
    });

    gsap.registerPlugin(ScrollTrigger);
    const tl = new TimelineMax();
    tl.to('.line-text-scroll', {
        xPercent:7,
        scrollTrigger:{
            trigger:".line-text-scroll",
            scrub:1
        }
    })

    const featureImgs = gsap.utils.toArray(".feature__img-wrapper .img-overlay");
    const featureBoxes = document.querySelectorAll('.feature__info');

    featureImgs.forEach((img, i) => {
        let featureBox = featureBoxes[i];
        ScrollTrigger.create({
            trigger: img,
            toggleClass: { targets: featureBox, className: 'active' },
            start: 'top 40%',
            end: 'bottom 40%',
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: 'top 40%',
                once: true
            }
        })
            .to(img, {
                duration: 1.2,
                ease: "expo",
                scaleX: 0,
                transformOrigin: "right center"
            })
    });


    ScrollTrigger.create({
        trigger: ".features",
        start: "top center",
        end: "bottom center",
        markers: true,
        onToggle: self => {
            let { direction, isActive } = self;

            const featureBoxes = document.querySelectorAll('.feature__info');
            if (direction == -1 && !isActive) {
                featureBoxes[0].classList.add('active')
            } else if (direction == 1 && !isActive) {
                featureBoxes[featureBoxes.length - 1].classList.add('active')
            }

        }
    });
});