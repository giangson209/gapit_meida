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
        const id = featureBox.getAttribute('id');
        const headElements = document.querySelectorAll('.head-feat[data-head="'+id+'"]');
        const activatedElements = new Set();
        ScrollTrigger.create({
            trigger: img,
            toggleClass: { targets: featureBox, className: 'active' },
            start: 'top 40%',
            end: 'bottom 40%',
            onLeave: () => {
                // console.log('ok')
                // headElements.forEach((headElement) => {
                //     headElement.classList.remove('active');
                // });
                const headActive = document.querySelectorAll('.head-feat.active');
                if (headActive.length > 0) {
                    headActive.forEach((headElement) => {
                        const dataHead = headElement.getAttribute('data-head');
                        if (parseInt(dataHead.substring(5)) + 1 < 7) {
                            const previousDataHead = `text-${parseInt(dataHead.substring(5)) + 1}`;
                            const headAdd = document.querySelectorAll('.head-feat[data-head="'+previousDataHead+'"]');
                            headElements.forEach((headElement) => {
                                headElement.classList.remove('active');
                            });
                            headAdd.forEach((headElement) => {
                                headElement.classList.add('active');
                            });
                        }
                    });
                }
            },
            onLeaveBack: () => {
                const headActive = document.querySelectorAll('.head-feat.active');
                if (headActive.length > 0) {
                    headActive.forEach((headElement) => {
                        const dataHead = headElement.getAttribute('data-head');
                        if (parseInt(dataHead.substring(5)) - 1 > 0) {
                            const previousDataHead = `text-${parseInt(dataHead.substring(5)) - 1}`;
                            const headAdd = document.querySelectorAll('.head-feat[data-head="'+previousDataHead+'"]');
                            headElements.forEach((headElement) => {
                                headElement.classList.remove('active');
                            });
                            headAdd.forEach((headElement) => {
                                headElement.classList.add('active');
                            });
                        }
                    });
                }
            },
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: 'top 40%',
                once: true
            }
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: 'top 40%',
                once: true,
                // onEnter: () => {
                //     gsap.to(headElements, {
                //         className: 'head-feat active',
                //     });
                // },
            },
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
            const headBoxes = document.querySelectorAll('.head-feat');
            if (direction == -1 && !isActive) {
                featureBoxes[0].classList.add('active')
                headBoxes[0].classList.add('active')
            } else if (direction == 1 && !isActive) {
                featureBoxes[featureBoxes.length - 1].classList.add('active')
                headBoxes[headBoxes.length - 1].classList.add('active')
            }

        }
    });


    const cursorBee = document.querySelector(".cursor-bee");
    const cursorEye = document.querySelector(".cursor-eye");
    let scale = 1;
    function mousemoveHandler(e) {
        const target = e.target;
        const tl = gsap.timeline({
            defaults: {
                x: e.clientX,
                y: e.clientY,
                ease: "power2.out"
            }
        });
        // JUST FOR MY LOGO
        if (
            target.closest(".page-footer") ||
            target.classList.contains("page-footer")
        ) {
            gsap.to(".cursor", {
                opacity: 0
            });
            return;
        }
        if (target.tagName.toLowerCase() === "img" && target.closest(".cur-hover")) {
            tl.to(cursorBee, {
                opacity: 0
            }).to(
                cursorEye,
                {
                    opacity: 1
                },
                "-=0.5"
            );
        } else {
            if (target.classList.contains("line-animation")) {
                scale = 4;
            } else {
                scale = 1;
            }

            tl.to(cursorBee, {
                opacity: 1,
                scale: scale
            }).to(
                cursorEye,
                {
                    opacity: 0
                },
                "-=0.5"
            );
        }
    }
    function mouseleaveHandler() {
        gsap.to(cursorBee, {
            opacity: 0
        });
    }
    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseleave", mouseleaveHandler);

});