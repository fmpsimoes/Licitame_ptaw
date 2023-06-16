<?php
session_start();
if(!isset($_SESSION['email'])) {
   header("Location: login.php"); // redirect to login page if user not logged in
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel de Utilizador</title>
    <link rel="icon" href="assets/images/bg/sm-logo.png" type="image/gif" sizes="20x20">

    <link rel="stylesheet" href="assets/css/animate.css">
    <!-- css file link -->
    <link rel="stylesheet" href="assets/css/all.css">

    <!-- bootstrap 5 -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">

    <!-- box-icon -->
    <link rel="stylesheet" href="assets/css/boxicons.min.css">

    <!-- bootstrap icon -->
    <link rel="stylesheet" href="assets/css/bootstrap-icons.css">

    <!-- jquery ui -->
    <link rel="stylesheet" href="assets/css/jquery-ui.css">

    <!-- swiper-slide -->
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">

    <!-- slick-slide -->
    <link rel="stylesheet" href="assets/css/slick-theme.css">
    <link rel="stylesheet" href="assets/css/slick.css">

    <!-- select 2 -->
    <link rel="stylesheet" href="assets/css/nice-select.css">

    <!-- animate css -->
    <link rel="stylesheet" href="assets/css/magnific-popup.css">

    <!-- odometer css -->
    <link rel="stylesheet" href="assets/css/odometer.css">

    <!-- style css -->



    <link href="https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.8/semantic.min.css" rel="stylesheet"/>
    <link href="https://cdn.datatables.net/v/se/dt-1.13.4/b-2.3.6/fc-4.2.2/sp-2.1.2/datatables.min.css" rel="stylesheet"/>

    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="./ourChanges/ourStyles.css">

    
</head>

<body>
    <!-- preloader -->
    <div class="preloader">
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <!-- search area -->
    <div id="searchArea" class="mobile-search"></div>

    <!-- ========== topbar ============= -->
    <div id="topbar" class="topbar"></div>

    <!-- ========== header============= -->

    <header id="header" class="header-area style-1">
    </header>


    <!-- ========== header end============= -->

    <!-- ========== inner-page-banner start ============= -->

    <div class="inner-banner">
        <div class="container">
            <h2 class="inner-banner-title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".2s">Conta</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Página Inicial</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Conta</li>
                </ol>
            </nav>
        </div>
    </div>

    <!-- ========== inner-page-banner end ============= -->

    <div class="dashboard-section pt-120 pb-120">
        <img alt="image" src="assets/images/bg/section-bg.png" class="img-fluid section-bg-top">
        <img alt="image" src="assets/images/bg/section-bg.png" class="img-fluid section-bg-bottom">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3">
                    <div class="nav flex-column nav-pills gap-4 wow fadeInUp" data-wow-duration="1.5s"
                        data-wow-delay=".2s" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active nav-btn-style mx-auto  mb-20" id="v-pills-dashboard-tab"
                            data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab"
                            aria-controls="v-pills-dashboard" aria-selected="true"><svg width="22" height="22"
                                viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_388_603)">
                                    <path
                                        d="M8.47911 7.33339H1.60411C0.719559 7.33339 0 6.61383 0 5.72911V1.60411C0 0.719559 0.719559 0 1.60411 0H8.47911C9.36383 0 10.0834 0.719559 10.0834 1.60411V5.72911C10.0834 6.61383 9.36383 7.33339 8.47911 7.33339ZM1.60411 1.375C1.47772 1.375 1.375 1.47772 1.375 1.60411V5.72911C1.375 5.85567 1.47772 5.95839 1.60411 5.95839H8.47911C8.60567 5.95839 8.70839 5.85567 8.70839 5.72911V1.60411C8.70839 1.47772 8.60567 1.375 8.47911 1.375H1.60411Z" />
                                    <path
                                        d="M8.47911 22H1.60411C0.719559 22 0 21.2805 0 20.3959V10.7709C0 9.88618 0.719559 9.16663 1.60411 9.16663H8.47911C9.36383 9.16663 10.0834 9.88618 10.0834 10.7709V20.3959C10.0834 21.2805 9.36383 22 8.47911 22ZM1.60411 10.5416C1.47772 10.5416 1.375 10.6443 1.375 10.7709V20.3959C1.375 20.5223 1.47772 20.625 1.60411 20.625H8.47911C8.60567 20.625 8.70839 20.5223 8.70839 20.3959V10.7709C8.70839 10.6443 8.60567 10.5416 8.47911 10.5416H1.60411Z" />
                                    <path
                                        d="M20.3953 22H13.5203C12.6356 22 11.916 21.2805 11.916 20.3959V16.2709C11.916 15.3862 12.6356 14.6667 13.5203 14.6667H20.3953C21.2798 14.6667 21.9994 15.3862 21.9994 16.2709V20.3959C21.9994 21.2805 21.2798 22 20.3953 22ZM13.5203 16.0417C13.3937 16.0417 13.291 16.1444 13.291 16.2709V20.3959C13.291 20.5223 13.3937 20.625 13.5203 20.625H20.3953C20.5217 20.625 20.6244 20.5223 20.6244 20.3959V16.2709C20.6244 16.1444 20.5217 16.0417 20.3953 16.0417H13.5203Z" />
                                    <path
                                        d="M20.3953 12.8334H13.5203C12.6356 12.8334 11.916 12.1138 11.916 11.2291V1.60411C11.916 0.719559 12.6356 0 13.5203 0H20.3953C21.2798 0 21.9994 0.719559 21.9994 1.60411V11.2291C21.9994 12.1138 21.2798 12.8334 20.3953 12.8334ZM13.5203 1.375C13.3937 1.375 13.291 1.47772 13.291 1.60411V11.2291C13.291 11.3557 13.3937 11.4584 13.5203 11.4584H20.3953C20.5217 11.4584 20.6244 11.3557 20.6244 11.2291V1.60411C20.6244 1.47772 20.5217 1.375 20.3953 1.375H13.5203Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_388_603">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>Conta</button>
                        <button class="nav-link nav-btn-style mx-auto mb-20" id="v-pills-profile-tab"
                            data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab"
                            aria-controls="v-pills-profile" aria-selected="true"><i class="lar la-user"></i><svg
                                width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.7782 14.2218C17.5801 13.0237 16.1541 12.1368 14.5982 11.5999C16.2646 10.4522 17.3594 8.53136 17.3594 6.35938C17.3594 2.85282 14.5066 0 11 0C7.49345 0 4.64062 2.85282 4.64062 6.35938C4.64062 8.53136 5.73543 10.4522 7.40188 11.5999C5.84598 12.1368 4.41994 13.0237 3.22184 14.2218C1.14421 16.2995 0 19.0618 0 22H1.71875C1.71875 16.8823 5.88229 12.7188 11 12.7188C16.1177 12.7188 20.2812 16.8823 20.2812 22H22C22 19.0618 20.8558 16.2995 18.7782 14.2218ZM11 11C8.44117 11 6.35938 8.91825 6.35938 6.35938C6.35938 3.8005 8.44117 1.71875 11 1.71875C13.5588 1.71875 15.6406 3.8005 15.6406 6.35938C15.6406 8.91825 13.5588 11 11 11Z" />
                            </svg>Meu Perfil</button>
                        <button class="nav-link nav-btn-style mx-auto mb-20" id="v-pills-publish-porRever"
                            data-bs-toggle="pill" data-bs-target="#v-pills-porRever" type="button" role="tab"
                            aria-controls="v-pills-porRever" aria-selected="true"><svg width="22" height="22"
                                viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7115 18.1422L18.729 5.7622C18.6678 4.96461 17.9932 4.3398 17.1933 4.3398H15.2527V4.25257C15.2527 1.90768 13.345 0 11.0002 0C8.65527 0 6.74758 1.90768 6.74758 4.25257V4.3398H4.80703C4.00708 4.3398 3.33251 4.96457 3.2715 5.76052L2.28872 18.1439C2.21266 19.1354 2.55663 20.1225 3.23235 20.852C3.90808 21.5815 4.86598 22 5.86041 22H16.1399C17.1342 22 18.0922 21.5816 18.768 20.852C19.4437 20.1224 19.7876 19.1354 19.7115 18.1422ZM8.03622 4.25257C8.03622 2.61826 9.36588 1.28863 11.0002 1.28863C12.6344 1.28863 13.9641 2.6183 13.9641 4.25257V4.3398H8.03622V4.25257ZM17.8225 19.9764C17.3835 20.4503 16.7859 20.7114 16.1399 20.7114H5.86045C5.21437 20.7114 4.61685 20.4503 4.17779 19.9764C3.73878 19.5024 3.5242 18.8866 3.57352 18.2441L4.55622 5.86072C4.56619 5.73044 4.67636 5.62843 4.80703 5.62843H6.74758V7.21548C6.74758 7.57131 7.03607 7.8598 7.3919 7.8598C7.74772 7.8598 8.03622 7.57131 8.03622 7.21548V5.62843H13.9641V7.21548C13.9641 7.57131 14.2526 7.8598 14.6084 7.8598C14.9642 7.8598 15.2527 7.57131 15.2527 7.21548V5.62843H17.1933C17.324 5.62843 17.4341 5.73048 17.4443 5.86244L18.4267 18.2424C18.4762 18.8866 18.2615 19.5024 17.8225 19.9764Z" />
                                <path
                                    d="M13.9035 10.9263C13.652 10.6746 13.244 10.6746 12.9924 10.9263L10.1154 13.8033L9.00909 12.697C8.75751 12.4454 8.34952 12.4454 8.0979 12.697C7.84627 12.9486 7.84627 13.3566 8.0979 13.6082L9.65977 15.1701C9.78558 15.2959 9.9505 15.3588 10.1153 15.3588C10.2802 15.3588 10.4451 15.2959 10.5709 15.1701L13.9034 11.8375C14.1551 11.5858 14.1551 11.1779 13.9035 10.9263Z" />
                            </svg>Leilões por Rever</button>

                        <button class="nav-link nav-btn-style mx-auto mb-20" id="v-pills-publish-Revistos"
                            data-bs-toggle="pill" data-bs-target="#v-pills-Revistos" type="button" role="tab"
                            aria-controls="v-pills-Revistos" aria-selected="true"><svg width="22" height="22"
                                viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7115 18.1422L18.729 5.7622C18.6678 4.96461 17.9932 4.3398 17.1933 4.3398H15.2527V4.25257C15.2527 1.90768 13.345 0 11.0002 0C8.65527 0 6.74758 1.90768 6.74758 4.25257V4.3398H4.80703C4.00708 4.3398 3.33251 4.96457 3.2715 5.76052L2.28872 18.1439C2.21266 19.1354 2.55663 20.1225 3.23235 20.852C3.90808 21.5815 4.86598 22 5.86041 22H16.1399C17.1342 22 18.0922 21.5816 18.768 20.852C19.4437 20.1224 19.7876 19.1354 19.7115 18.1422ZM8.03622 4.25257C8.03622 2.61826 9.36588 1.28863 11.0002 1.28863C12.6344 1.28863 13.9641 2.6183 13.9641 4.25257V4.3398H8.03622V4.25257ZM17.8225 19.9764C17.3835 20.4503 16.7859 20.7114 16.1399 20.7114H5.86045C5.21437 20.7114 4.61685 20.4503 4.17779 19.9764C3.73878 19.5024 3.5242 18.8866 3.57352 18.2441L4.55622 5.86072C4.56619 5.73044 4.67636 5.62843 4.80703 5.62843H6.74758V7.21548C6.74758 7.57131 7.03607 7.8598 7.3919 7.8598C7.74772 7.8598 8.03622 7.57131 8.03622 7.21548V5.62843H13.9641V7.21548C13.9641 7.57131 14.2526 7.8598 14.6084 7.8598C14.9642 7.8598 15.2527 7.57131 15.2527 7.21548V5.62843H17.1933C17.324 5.62843 17.4341 5.73048 17.4443 5.86244L18.4267 18.2424C18.4762 18.8866 18.2615 19.5024 17.8225 19.9764Z" />
                                <path
                                    d="M13.9035 10.9263C13.652 10.6746 13.244 10.6746 12.9924 10.9263L10.1154 13.8033L9.00909 12.697C8.75751 12.4454 8.34952 12.4454 8.0979 12.697C7.84627 12.9486 7.84627 13.3566 8.0979 13.6082L9.65977 15.1701C9.78558 15.2959 9.9505 15.3588 10.1153 15.3588C10.2802 15.3588 10.4451 15.2959 10.5709 15.1701L13.9034 11.8375C14.1551 11.5858 14.1551 11.1779 13.9035 10.9263Z" />
                            </svg>Leilões Revistos</button>
                        <button class="nav-link nav-btn-style mx-auto mb-20" onclick="logout()" id="v-pills-publish-tab"
                            data-bs-toggle="pill" data-bs-target="#v-pills-order" type="button" role="tab"
                            aria-controls="v-pills-order" aria-selected="true"><svg width="22" height="22"
                                viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7115 18.1422L18.729 5.7622C18.6678 4.96461 17.9932 4.3398 17.1933 4.3398H15.2527V4.25257C15.2527 1.90768 13.345 0 11.0002 0C8.65527 0 6.74758 1.90768 6.74758 4.25257V4.3398H4.80703C4.00708 4.3398 3.33251 4.96457 3.2715 5.76052L2.28872 18.1439C2.21266 19.1354 2.55663 20.1225 3.23235 20.852C3.90808 21.5815 4.86598 22 5.86041 22H16.1399C17.1342 22 18.0922 21.5816 18.768 20.852C19.4437 20.1224 19.7876 19.1354 19.7115 18.1422ZM8.03622 4.25257C8.03622 2.61826 9.36588 1.28863 11.0002 1.28863C12.6344 1.28863 13.9641 2.6183 13.9641 4.25257V4.3398H8.03622V4.25257ZM17.8225 19.9764C17.3835 20.4503 16.7859 20.7114 16.1399 20.7114H5.86045C5.21437 20.7114 4.61685 20.4503 4.17779 19.9764C3.73878 19.5024 3.5242 18.8866 3.57352 18.2441L4.55622 5.86072C4.56619 5.73044 4.67636 5.62843 4.80703 5.62843H6.74758V7.21548C6.74758 7.57131 7.03607 7.8598 7.3919 7.8598C7.74772 7.8598 8.03622 7.57131 8.03622 7.21548V5.62843H13.9641V7.21548C13.9641 7.57131 14.2526 7.8598 14.6084 7.8598C14.9642 7.8598 15.2527 7.57131 15.2527 7.21548V5.62843H17.1933C17.324 5.62843 17.4341 5.73048 17.4443 5.86244L18.4267 18.2424C18.4762 18.8866 18.2615 19.5024 17.8225 19.9764Z" />
                                <path
                                    d="M13.9035 10.9263C13.652 10.6746 13.244 10.6746 12.9924 10.9263L10.1154 13.8033L9.00909 12.697C8.75751 12.4454 8.34952 12.4454 8.0979 12.697C7.84627 12.9486 7.84627 13.3566 8.0979 13.6082L9.65977 15.1701C9.78558 15.2959 9.9505 15.3588 10.1153 15.3588C10.2802 15.3588 10.4451 15.2959 10.5709 15.1701L13.9034 11.8375C14.1551 11.5858 14.1551 11.1779 13.9035 10.9263Z" />
                            </svg>Sair</button>

                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel"
                            aria-labelledby="v-pills-dashboard-tab">
                            <div class="dashboard-area box--shadow">
                                <div class="row g-4">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="dashboard-card hover-border1 wow fadeInDown"
                                            data-wow-duration="1.5s" data-wow-delay=".2s">
                                            <div class="header">
                                                <h5>Leilões Pendentes</h5>
                                            </div>
                                            <div class="body">
                                                <div class="counter-item">
                                                    <h2 id="countPendentes"></h2>
                                                </div>
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" width="50" height="50"  viewBox="0 0 502 511.82">
                                                        <path fill-rule="nonzero" d="M279.75 471.21c14.34-1.9 25.67 12.12 20.81 25.75-2.54 6.91-8.44 11.76-15.76 12.73a260.727 260.727 0 0 1-50.81 1.54c-62.52-4.21-118.77-31.3-160.44-72.97C28.11 392.82 0 330.04 0 260.71 0 191.37 28.11 128.6 73.55 83.16S181.76 9.61 251.1 9.61c24.04 0 47.47 3.46 69.8 9.91a249.124 249.124 0 0 1 52.61 21.97l-4.95-12.96c-4.13-10.86 1.32-23.01 12.17-27.15 10.86-4.13 23.01 1.32 27.15 12.18L428.8 68.3a21.39 21.39 0 0 1 1.36 6.5c1.64 10.2-4.47 20.31-14.63 23.39l-56.03 17.14c-11.09 3.36-22.8-2.9-26.16-13.98-3.36-11.08 2.9-22.8 13.98-26.16l4.61-1.41a210.71 210.71 0 0 0-41.8-17.12c-18.57-5.36-38.37-8.24-59.03-8.24-58.62 0-111.7 23.76-150.11 62.18-38.42 38.41-62.18 91.48-62.18 150.11 0 58.62 23.76 111.69 62.18 150.11 34.81 34.81 81.66 57.59 133.77 61.55 14.9 1.13 30.23.76 44.99-1.16zm-67.09-312.63c0-10.71 8.69-19.4 19.41-19.4 10.71 0 19.4 8.69 19.4 19.4V276.7l80.85 35.54c9.8 4.31 14.24 15.75 9.93 25.55-4.31 9.79-15.75 14.24-25.55 9.93l-91.46-40.2c-7.35-2.77-12.58-9.86-12.58-18.17V158.58zm134.7 291.89c-15.62 7.99-13.54 30.9 3.29 35.93 4.87 1.38 9.72.96 14.26-1.31 12.52-6.29 24.54-13.7 35.81-22.02 5.5-4.1 8.36-10.56 7.77-17.39-1.5-15.09-18.68-22.74-30.89-13.78a208.144 208.144 0 0 1-30.24 18.57zm79.16-69.55c-8.84 13.18 1.09 30.9 16.97 30.2 6.21-.33 11.77-3.37 15.25-8.57 7.86-11.66 14.65-23.87 20.47-36.67 5.61-12.64-3.13-26.8-16.96-27.39-7.93-.26-15.11 4.17-18.41 11.4-4.93 10.85-10.66 21.15-17.32 31.03zm35.66-99.52c-.7 7.62 3 14.76 9.59 18.63 12.36 7.02 27.6-.84 29.05-14.97 1.33-14.02 1.54-27.9.58-41.95-.48-6.75-4.38-12.7-10.38-15.85-13.46-6.98-29.41 3.46-28.34 18.57.82 11.92.63 23.67-.5 35.57zM446.1 177.02c4.35 10.03 16.02 14.54 25.95 9.96 9.57-4.4 13.86-15.61 9.71-25.29-5.5-12.89-12.12-25.28-19.69-37.08-9.51-14.62-31.89-10.36-35.35 6.75-.95 5.03-.05 9.94 2.72 14.27 6.42 10.02 12 20.44 16.66 31.39z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="dashboard-card hover-border1 wow fadeInDown"
                                            data-wow-duration="1.5s" data-wow-delay=".4s">
                                            <div class="header">
                                                <h5>Taxa de aprovação</h5>
                                            </div>
                                            <div class="body">
                                                <div class="counter-item">
                                                    <h2 id="countTaxaAprov"></h2>
                                                </div>
                                                <div class="icon">
                                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" id="Capa_1"  viewBox="0 0 394.4 394.4" xml:space="preserve">
	                                                <path d="M37.4,377.4c-5.223,0-10.438-1.992-14.423-5.977c-7.97-7.963-7.97-20.883,0-28.846l319.6-319.601   c7.97-7.97,20.876-7.97,28.846,0c7.97,7.962,7.97,20.882,0,28.845l-319.6,319.601C47.838,375.408,42.623,377.4,37.4,377.4z    M394.4,299.199c0-52.496-42.704-95.199-95.2-95.199S204,246.703,204,299.199s42.704,95.201,95.2,95.201   S394.4,351.695,394.4,299.199z M353.601,299.199c0,29.996-24.405,54.4-54.4,54.4s-54.4-24.404-54.4-54.4   c0-29.994,24.405-54.398,54.4-54.398S353.601,269.205,353.601,299.199z M190.4,95.2C190.4,42.704,147.696,0,95.2,0S0,42.704,0,95.2   s42.704,95.2,95.2,95.2S190.4,147.696,190.4,95.2z M149.6,95.2c0,29.995-24.405,54.4-54.4,54.4s-54.4-24.405-54.4-54.4   s24.405-54.4,54.4-54.4S149.6,65.206,149.6,95.2z"/>
                                                </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="dashboard-card hover-border1 wow fadeInDown"
                                            data-wow-duration="1.5s" data-wow-delay=".6s">
                                            <div class="header">
                                                <h5>Leilões Aprovados</h5>
                                            </div>
                                            <div class="body">
                                                <div class="counter-item">
                                                    <h2 id="countAprovados"></h2>
                                                </div>
                                                <div class="icon">
                                                <svg width="50" height="50" viewBox="0 0 50 50"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M23.1445 0.0586052C22.959 0.0781364 22.3828 0.146496 21.875 0.195324C18.6523 0.546886 15.0879 1.75782 12.207 3.47657C8.54492 5.66407 5.56641 8.64259 3.37891 12.3047C1.68945 15.1367 0.507813 18.584 0.0976563 21.875C-0.0292969 22.9395 -0.0292969 27.0606 0.0976563 28.125C1.03516 35.7227 5.51758 42.5391 12.207 46.5234C18.75 50.4297 26.9336 51.0645 34.1309 48.2227C35.2246 47.793 37.5684 46.6016 38.0469 46.2402C38.5352 45.8692 38.8086 45.2149 38.7402 44.5606C38.6328 43.5742 37.9688 42.9102 36.9824 42.8027C36.4941 42.7539 36.416 42.7832 35.1563 43.4375C31.8555 45.1563 29.0332 45.9375 25.6348 46.0645C16.3574 46.4258 7.79297 40.4395 4.89258 31.582C3.95508 28.711 3.62305 25.8692 3.90625 23.0371C4.22852 19.8145 5.42969 16.2598 7.03125 13.8281C9.87305 9.48243 13.6816 6.50392 18.3203 4.99025C24.4238 2.99806 30.8496 3.80861 36.2988 7.26564C36.7969 7.57814 37.3633 7.87111 37.5684 7.91993C39.0918 8.2715 40.4102 6.6504 39.7559 5.22462C39.5313 4.73634 39.3359 4.56056 38.1836 3.8379C35.1074 1.89454 31.6602 0.67384 27.9297 0.195324C27.0703 0.0781364 23.7402 -0.00975418 23.1445 0.0586052Z" />
                                                        <path
                                                            d="M47.2949 4.12109C47.1289 4.17968 46.8554 4.33593 46.6894 4.48242C46.5332 4.61913 41.7968 10.4687 36.1718 17.4805C30.5468 24.4922 25.8593 30.3027 25.7422 30.3906C25.4101 30.6641 24.9511 30.7129 24.5703 30.5078C24.3847 30.4004 21.9433 28.1543 19.1601 25.5078C16.3672 22.8613 13.9843 20.6152 13.8574 20.5176C13.0859 19.9316 12.0508 20.0098 11.3476 20.7031C10.6445 21.416 10.5566 22.4805 11.1621 23.2324C11.4941 23.6523 21.1523 32.8223 21.875 33.4082C23.8769 35.0293 26.6601 34.9219 28.4765 33.1543C29.1211 32.5293 49.4531 7.27538 49.6777 6.8164C50.4492 5.27343 48.9648 3.58398 47.2949 4.12109Z" />
                                                        <path
                                                            d="M46.4845 17.4414C45.4494 17.8906 45.1174 18.8184 45.4592 20.3027C45.9084 22.207 46.0939 24.8145 45.9084 26.7578C45.5861 30.1367 44.5607 33.1934 42.7736 36.1328C42.0314 37.3633 41.9435 37.8027 42.3146 38.6035C42.5002 39.0137 42.6564 39.1992 42.9787 39.3848C43.5451 39.7168 44.0529 39.7949 44.5705 39.6485C45.2931 39.4531 45.7033 38.9551 46.8361 36.9141C49.7267 31.6797 50.6154 25.332 49.2678 19.4727C49.0724 18.6231 48.9553 18.3203 48.7111 18.0274C48.1545 17.3535 47.2365 17.1094 46.4845 17.4414Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="dashboard-card hover-border1 wow fadeInDown"
                                            data-wow-duration="1.5s" data-wow-delay=".8s">
                                            <div class="header">
                                                <h5>Leilões Rejeitados</h5>
                                            </div>
                                            <div class="body">
                                                <div class="counter-item">
                                                    <h2 id="countRejeitados"></h2>
                                                </div>
                                                <div class="icon">
                                                <svg class="svg-icon" width="50" height="50" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  />
                                                </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab">
                            <div class="dashboard-profile">
                                <div class="owner">
                                    <div class="image">
                                        <img alt="image" src="assets/images/icons/admin.svg" style="width: 200px; height: 200px;"">
                                    </div>
                                    <div class="content">
                                        <h3 id="ttNome"></h3>
                                        <p class="para" id="ttEmail"></p>
                                    </div>
                                </div>
                                <div class="form-wrapper">
                                    <form method="POST" id="form123" enctype="multipart/form-data" >
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-12 col-md-6">
                                                <div class="form-inner">
                                                    <label for="firstname">Primeiro Nome</label>
                                                    <input type="text" maxlength="15" placeholder="Primeiro Nome" name="firstname" id="firstname" required>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-12 col-md-6">
                                                <div class="form-inner">
                                                    <label for="lastname">Último Nome</label>
                                                    <input type="text" maxlength="15" placeholder="Último nome" name="lastname" id="lastname" required>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-12 col-md-6">
                                                <div class="form-inner">
                                                    <label for="contact">Contacto Telefónico</label>
                                                    <input type="number" maxlength="9" placeholder="9xx xxx xxx" name="contact" id="contact" required>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-12 col-md-6">
                                                <div class="form-inner">
                                                    <label for="email">Email</label>
                                                    <input type="text" placeholder="Email" name="email" id="email" disabled>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-inner">
                                                    <label for="password">Password</label>
                                                    <input type="password" name="password" id="password"
                                                        placeholder="Password" />
                                                    <i class="bi bi-eye-slash" id="togglePassword"></i>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-inner mb-0">
                                                    <label for="password2">Confirmar Password</label>
                                                    <input type="password" name="password2" id="password2"
                                                        placeholder="Password" />
                                                    <i class="bi bi-eye-slash" id="togglePassword2"></i>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="button-group">
                                                    <button type="submit" class="eg-btn profile-btn" id="actualizar">Actualizar
                                                        Perfil</button>
                                                    <button type="button"class="eg-btn cancel-btn">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                       
                        <div class="tab-pane fade" id="v-pills-porRever" role="tabpanel"
                            aria-labelledby="v-pills-porRever">
                            <!-- table title-->
                            <div class="table-title-area">
                                <h3>Lista de Leilões Por Rever</h3>
                            </div>
                            <!-- table -->
                            <div class="table-wrapper" id = "tablePorRever">
                            <!-- Tabela Por Rever-->
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-Revistos" role="tabpanel"
                            aria-labelledby="v-pills-Revistos">
                            <!-- table title-->
                            <div class="table-title-area">
                                <h3>Lista de Leilões Revistos</h3>             
                            </div>
                            <div class="table-wrapper" id = "tableRevistos">
                            <!-- Tabela Revistos-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ===============  Hero area end=============== -->

    <!-- =============== counter-section end =============== -->

    <!-- =============== Footer-action-section start =============== -->

    <footer id="footer">
    </footer>

    <!-- =============== Footer-action-section end =============== -->

    <!-- js file link -->
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/v/se/dt-1.13.4/b-2.3.6/fc-4.2.2/sp-2.1.2/datatables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/dataTables.semanticui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.8/semantic.min.js"></script>
    <script src="assets/js/jquery-ui.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/swiper-bundle.min.js"></script>
    <script src="assets/js/slick.js"></script>
    <script src="assets/js/jquery.nice-select.js"></script>
    <script src="assets/js/odometer.min.js"></script>
    <script src="assets/js/viewport.jquery.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>

    <script src="ourChanges/callCommonSections.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="ourChanges/dashboardPerito.js"></script>
</body>

</html>