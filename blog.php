<?php include 'header.php';?>
<main>
    <section class="box-blog-cate">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="side-bar-blog">
                        <div class="sidebar">
                            <div class="avarta text-center"><img src="images/blog/sidebar-blog.png" class="img-fluid w-100" alt=""></div>
                            <div class="desc">
                                <h2>Let's upgrade your marketing game.</h2>
                                <div class="desc">
                                    Get fresh tips, how-tos, and expert marketing advice every week. (14,500 people already are in this topics)
                                </div>
                                <div class="frm-bar-blog">
                                    <input type="text" placeholder="Your Email" class="txt_field">
                                    <input type="submit" value="Subscrible" class="btn_field">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="content-blog-cate">
                        <div class="item-content-blog">
                            <div class="title-blog-cate">Resource</div>
                            <div class="list-news">
                                <div class="item-news">
                                    <div class="avarta">
                                        <div class="avr"><a href="blog-detail.php"><img src="images/home/ar1.png" class="img-fluid w-100" alt=""></a></div>
                                    </div>
                                    <div class="info">
                                        <h3><a href="blog-detail.php">10 SaaS Campaign Examples We Love + Tips to Steal Their Ideas</a></h3>
                                        <div class="desc">
                                            B2B Marketing, Brand Story Storytelling, Brand Statefy, Conten Marketing, Content Strategy
                                        </div>
                                        <div class="btn-main"><a href="blog-detail.php">READ MORE</a></div>
                                    </div>
                                </div>
                                <div class="item-news">
                                    <div class="avarta">
                                        <div class="avr"><a href="blog-detail.php"><img src="images/home/ar2.png" class="img-fluid w-100" alt=""></a></div>
                                    </div>
                                    <div class="info">
                                        <h3><a href="blog-detail.php">10 SaaS Campaign Examples We Love + Tips to Steal Their Ideas</a></h3>
                                        <div class="desc">
                                            B2B Marketing, Brand Story Storytelling, Brand Statefy, Conten Marketing, Content Strategy
                                        </div>
                                        <div class="btn-main"><a href="blog-detail.php">READ MORE</a></div>
                                    </div>
                                </div>
                                <div class="item-news">
                                    <div class="avarta">
                                        <div class="avr"><a href="blog-detail.php"><img src="images/home/ar3.png" class="img-fluid w-100" alt=""></a></div>
                                    </div>
                                    <div class="info">
                                        <h3><a href="blog-detail.php">10 SaaS Campaign Examples We Love + Tips to Steal Their Ideas</a></h3>
                                        <div class="desc">
                                            B2B Marketing, Brand Story Storytelling, Brand Statefy, Conten Marketing, Content Strategy
                                        </div>
                                        <div class="btn-main"><a href="blog-detail.php">READ MORE</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="pagination">
                                <ul>
                                    <li><a href="">
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8Z" fill="#101010"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85355 3.14645C8.04882 3.34171 8.04882 3.65829 7.85355 3.85355L3.70711 8L7.85355 12.1464C8.04882 12.3417 8.04882 12.6583 7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L2.64645 8.35355C2.45118 8.15829 2.45118 7.84171 2.64645 7.64645L7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645Z" fill="#101010"/>
                                            </svg>
                                        </a></li>
                                    <li><a href="" class="active">1</a></li>
                                    <li><a href="">2</a></li>
                                    <li><a href="">3</a></li>
                                    <li><a href="">
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 8.27614 14.2761 8.5 14 8.5L3 8.5C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5L14 7.5C14.2761 7.5 14.5 7.72386 14.5 8Z" fill="#101010"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14645 12.8536C8.95118 12.6583 8.95118 12.3417 9.14645 12.1464L13.2929 8L9.14645 3.85355C8.95119 3.65829 8.95119 3.34171 9.14645 3.14645C9.34171 2.95118 9.65829 2.95118 9.85355 3.14645L14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L9.85355 12.8536C9.65829 13.0488 9.34171 13.0488 9.14645 12.8536Z" fill="#101010"/>
                                            </svg>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="item-content-blog">
                            <div class="title-blog-cate">Blog</div>
                            <div class="grid-news">
                                <div class="row">
                                    <?php
                                    for ($x = 0; $x <= 5; $x++) { ?>
                                        <div class="col-md-4">
                                            <div class="iem-grid-blog">
                                                <div class="avarta"><a href=""><img src="images/home/ar1.png" class="img-fluid w-100" alt=""></a></div>
                                                <div class="info">
                                                    <h3><a href="blog-detail.php">10 SaaS Campaign Examples We Love + Tips to Steal Their Ideas</a></h3>
                                                    <div class="desc">Graphic Design, Photography</div>
                                                </div>
                                            </div>
                                        </div>
                                    <?php }
                                    ?>
                                </div>
                            </div>
                            <div class="pagination">
                                <ul>
                                    <li><a href="">
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8Z" fill="#101010"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85355 3.14645C8.04882 3.34171 8.04882 3.65829 7.85355 3.85355L3.70711 8L7.85355 12.1464C8.04882 12.3417 8.04882 12.6583 7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L2.64645 8.35355C2.45118 8.15829 2.45118 7.84171 2.64645 7.64645L7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645Z" fill="#101010"/>
                                            </svg>
                                        </a></li>
                                    <li><a href="" class="active">1</a></li>
                                    <li><a href="">2</a></li>
                                    <li><a href="">3</a></li>
                                    <li><a href="">
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 8.27614 14.2761 8.5 14 8.5L3 8.5C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5L14 7.5C14.2761 7.5 14.5 7.72386 14.5 8Z" fill="#101010"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14645 12.8536C8.95118 12.6583 8.95118 12.3417 9.14645 12.1464L13.2929 8L9.14645 3.85355C8.95119 3.65829 8.95119 3.34171 9.14645 3.14645C9.34171 2.95118 9.65829 2.95118 9.85355 3.14645L14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L9.85355 12.8536C9.65829 13.0488 9.34171 13.0488 9.14645 12.8536Z" fill="#101010"/>
                                            </svg>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php include 'footer.php';?>
<!--<script type="text/javascript" src="js/about.js"></script> -->