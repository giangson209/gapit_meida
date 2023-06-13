<?php include 'header.php';?>
<main>
    <section class="box-work-container">
        <div class="container">
            <div class="title-work-page title-scroll-animate">
                <div class="icon">
                    <lottie-player src="json/3circle.json" background="transparent" autoplay="1" speed="1"></lottie-player>
                </div>
                <p><span>Your  Story  Matters</span></p>
            </div>
            <div class="filter-work">
                <div class="txt-filter-left">
                    <div class="all-txt-filter">Filter: <span>ALL WORK</span></div>
                </div>
                <div class="tag-filter">
                    <ul>
                        <li><a href="" class="active">ALL</a></li>
                        <li><a href="">Agriculture</a></li>
                        <li><a href="">Finance</a></li>
                        <li><a href="">Entertainment</a></li>
                        <li><a href="">Others</a></li>
                    </ul>
                </div>
            </div>
            <div class="list-work-cate">
                <div class="row">
                    <?php
                    for ($x = 1; $x <= 10; $x++) { ?>
                        <div class="col-md-6">
                            <div class="item-work">
                                <div class="avarta cur-hover"><a href="work-detail.php"><img src="images/work/wk-<?php echo $x ?>.png" class="img-fluid w-100" alt=""></a></div>
                                <div class="info">
                                    <h3><a href="work-detail.php">Vernal Edge</a></h3>
                                    <p>Conmunications, Spatial Design</p>
                                </div>
                            </div>
                        </div>
                    <?php }
                    ?>
                </div>
            </div>
        </div>
    </section>
</main>
<?php include 'footer.php';?>
<script>
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
</script>
