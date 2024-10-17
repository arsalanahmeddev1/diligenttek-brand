<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- og and meta tags  -->
    <title><?php echo $pageTitle ?? 'Diligenttek'; ?></title>
    <meta property="og:locale" content="en_GB">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Diligenttek">
    <meta property="og:description" content="">
    <meta property="og:url" content="https://diligenttek.com">
    <meta property="og:site_name" content="<?php echo $pageTitle;?>">
    <meta property="og:image" content="images/fav.webp" />
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:label1" content="Estimated reading time">
    <meta name="twitter:data1" content="1 minute">

    <link rel="icon" type="image/png" href="images/fav.webp">
    <link rel="icon" type="image/jpg" href="images/fav.webp">
    <link rel="shortcut icon" href="images/fav.webp" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/fav.webp">
    <link rel="apple-touch-icon" sizes="120x120" href="images/fav.webp">
    <link rel="apple-touch-icon" sizes="76x76" href="images/fav.webp">
    <link rel="apple-touch-icon" sizes="152x152" href="images/fav.webp">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <!-- font awesome  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <!-- aos  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- owl slider  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.29/fullpage.min.css" integrity="sha512-cdMjnD4i86qiUIK3pyOMeYKdJ2I0gy0CVZm2AvGuXgMRDFdoIEI2I/x39pZlRsMaI4IEZBJbsNuWVawly1nY/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- fav -->
    <link rel="icon" type="image/x-icon" href="./assets/images/fav.webp">
    <!-- css -->
    <link rel="stylesheet" href="./assets/css/utilities.css">
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body class="position-relative">
    <!-- <div id="loading-screen">
        <div class="loading-spinner">
            <img src="./assets/images/loader.gif" alt="">
        </div>
    </div> -->
    <div class="cursor"></div>
    <div class="cursor2"></div>
    <div class="side-bar d-none d-lg-block">
        <div class="d-flex align-items-center justify-content-between flex-column h-100">
            <div class="logo"><a href="./"><img src="./assets/images/logo.webp" alt=""></a></div>
            <div class="menu-icon menu-toggle ">
                <i class="fa-solid fa-bars"></i>
            </div>
            <ul class="social-links d-flex gap-30 flex-column align-items-center justify-content-between">
                <li><a href="javascript:;"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="javascript:;"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="javascript:;"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="javascript:;"><i class="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="side-bar-menu-wrap">
        <div class="d-flex main-list-flex">
            <ul class="main-list">
                <div class="menu-icon menu-toggle ">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <li><a class="main-anchors" href="./">Home</a></li>
                <li><a class="main-anchors" href="./about">About Us</a></li>
                <li class="sub-menu-list"><a href="./services">Services</a>
                </li>
                <li><a class="main-anchors" href="./career">Career</a></li>
                <li><a class="main-anchors" href="./contact">Contact</a></li>
            </ul>
            <!-- <div class="border-right"></div> -->
            <ul class="sub-menu">
                <div class="d-flex align-items-center">
                    <h5 class="fw-700 fs-30 text-black d-block d-lg-none mb-30">Sub Menu</h5>
                    <div class="menu-icon sub-menu-toggle">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <li><a href="./web-development">Web Development</a></li>
                <li><a href="./web-design">Web Design</a></li>
                <li><a href="./mobile-application">Mobile Application</a></li>
                <li><a href="./logo-design">Logo Design</a></li>
                <li><a href="./digital-marketing">Digital Marketing</a></li>
                <li><a href="./web-content">Web Content</a></li>
                <li><a href="./branding">Branding</a></li>
                <li><a href="./seo">Seo</a></li>
            </ul>
        </div>
        <img src="./assets/images/side-bar-img.webp" class="side-bar-img" alt="">
    </div>