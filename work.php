<?php include 'header.php';?>
<main>
    <section class="box-work-container">
        <div class="container">
            <div class="title-work-page">
                <div class="icon">
                    <lottie-player src="json/3circle.json" background="transparent" autoplay="1" speed="1"></lottie-player>
                </div>
                <span>Your  Story  Matters</span>
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
                                <div class="avarta"><a href="work-detail.php"><img src="images/work/wk-<?php echo $x ?>.png" class="img-fluid w-100" alt=""></a></div>
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