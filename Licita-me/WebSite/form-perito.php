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
    <title>Revisar Leilão</title>
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
    <div class="mobile-search">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-11">
                    <label>O que procura?</label>
                    <input type="text" placeholder="Procura por produto, categoria e artista...">
                </div>
                <div class="col-1 d-flex justify-content-end align-items-center">
                    <div class="search-cross-btn">
                        <i class="bi bi-x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ========== topbar ============= -->
    <div class="topbar">
        <div class="topbar-left d-flex flex-row align-items-center">
            <h6>Segue-nos</h6>
            <ul class="topbar-social-list gap-2">
                <li><a href="https://www.facebook.com/"><i class='bx bxl-facebook'></i></a></li>
                <li><a href="https://www.twitter.com/"><i class='bx bxl-twitter'></i></a></li>
                <li><a href="https://www.instagram.com/"><i class='bx bxl-instagram'></i></a></li>
                <li><a href="https://www.pinterest.com/"><i class='bx bxl-pinterest-alt'></i></a></li>
            </ul>
        </div>
        <div class="email-area">
            <h6>Email: <a href="mailto:licita_me@ptaw.pt">licitame@ptaw.pt</a></h6>
        </div>
    </div>

    <!-- ========== header============= -->

    <header class="header-area style-1">
        <div class="header-logo">
            <a href="index.html"><img alt="image" src="assets/images/bg/header-logo.png"></a>
        </div>
        <div class="main-menu">
            <div class="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                <div class="mobile-logo-wrap ">
                    <a href="index.html"><img alt="image" src="assets/images/bg/header-logo.png"></a>

                </div>
                <div class="menu-close-btn">
                    <i class="bi bi-x-lg"></i>
                </div>
            </div>
            <ul class="menu-list">
                <li>
                    <a href="index.html">Página Inicial</a>
                </li>
                <li>
                    <a href="about.html">Sobre Nós</a>
                </li>
                <li>
                    <a href="how-works.html">Como Funciona</a>
                </li>
                <li>
                    <a href="live-auction.html">Leilões</a>
                </li>
                <li><a href="contact.html">Contactos</a></li>
            </ul>
            <!-- mobile-search-area -->
            <div class="d-lg-none d-block">
                <form class="mobile-menu-form mb-5">
                    <div class="input-with-btn d-flex flex-column">
                        <input type="text" placeholder="Procurar...">
                        <button type="submit" class="eg-btn btn--primary btn--sm">Procurar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="nav-right d-flex align-items-center">
            <div class="search-btn">
                <i class="bi bi-search"></i>
            </div>
            <div class="eg-btn btn--primary header-btn">
                <a href="login.php">Conta</a>
            </div>
            <div class="mobile-menu-btn d-lg-none d-block">
                <i class='bx bx-menu'></i>
            </div>
        </div>
    </header>

    <!-- ========== header end============= -->

    <!-- ========== inner-page-banner start ============= -->

    <div class="inner-banner">
        <div class="container">
            <h2 class="inner-banner-title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".2s">Revisar Leilão
            </h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Página Inicial</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Revisar Leilão</li>
                </ol>
            </nav>
        </div>
    </div>

    <!-- ========== inner-page-banner end ============= -->

    <div class="live-auction-section pt-120 pb-120">
        <img alt="image" src="assets/images/bg/section-bg.png" class="img-fluid section-bg-top">
        <img alt="image" src="assets/images/bg/section-bg.png" class="img-fluid section-bg-bottom">
        <div class="container">
            <div class="form-wrapper">
                <form id="form">
                    <div class="row">
                        <h2>Dados da Arte</h2>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-12 col-md-6">
                            <div class="form-inner">
                                <label for="nameItem">Nome da peça *</label>
                                <input type="text" placeholder="Nome" name="nameItem" id="nameItem" required>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-6">
                            <div class="form-inner">
                                <label for="category">Categorias *</label>
                                <select name="category" id="category" required>
                                    <option value="" selected disabled>Escolha a categoria...</option>
                                    <option value="Pintura">Pintura</option>
                                    <option value="Fotografia">Fotografia não digital</option>
                                    <option value="Escultura">Escultura</option>
                                    <option value="Literatura">Literatura</option>
                                    <option value="Banda desenhada">Banda Desenhada</option>
                                    <option value="Artesanato">Artesanato</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="form-inner">
                                <label for="materials">Materiais *</label>
                                <input type="text" placeholder="Materiais" name="materials" id="materials" required>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-xl-6 col-lg-12 col-md-6">
                            <div class="form-inner">
                                <label for="dimensions">Dimensões *</label>
                                <input type="text" placeholder="Dimensões" name="dimensions" id="dimensions" required>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-6">
                            <div class="form-inner">
                                <label for="weight">Peso *</label>
                                <input type="text" placeholder="Peso" name="weight" id="weight" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-12 col-md-6">
                            <div class="form-inner">
                                <label for="author">Autor *</label>
                                <input type="text" placeholder="Autor" name="author" id="author" required>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-6">
                            <div class="form-inner">
                                <label for="periodEstimated">Período estimado da peça *</label>
                                <input type="text" placeholder="Período estimado" name="periodEstimated"
                                    id="periodEstimated" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-12 col-md-6">
                            <div class="form-inner">
                                <label for="valueBase">Valor Apreciação Base *</label>
                                <input type="text" placeholder="Valor Apreciação Base" name="valueBasePerito" id="valueBasePerito" required>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-6">
                            <div class="form-inner">
                                <label for="valueBuyNow">Valor Apreciação de Compra Imediata *</label>
                                <input type="text" placeholder="Valor Apreciação de Compra Imediata" name="valueBuyNowPerito"
                                    id="valueBuyNowPerito" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="form-inner">
                                <label for="valueBase">Condição *</label>
                                <input type="text" placeholder="Condição" name="condicao" id="condicao" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-inner">
                                <label for="description">Descrição *</label>
                                <textarea name="description" id="description" placeholder="Descrição da arte" rows="4"
                                    cols="50" required></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="form-inner">
                                <label for="images">Fotografias da Peça *</label>
                                <div class="card1">
                                    <span class="select1">Adicionar Fotografias</span>
                                        <input name="file" type="file" class="file" id="fotos" multiple>
                                    <div class="container1">   
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="form-inner">
                                <label for="certification">Certificado</label>
                                <div id="certificadoDiv">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="button-group">
                                <button type="submit" class="eg-btn profile-btn" id="aceite">Publicar Leilão</button>
                                <button type="submit" class="eg-btn profile-btn2" id="rejeitado">Rejeitar Leilão</button>
                                <button class="eg-btn cancel-btn">Cancelar</button>
                            </div>
                        </div>
            </div>
            </form>
        </div>
    </div>
    </div>


    <!-- ===============  Hero area end=============== -->

    <!-- =============== counter-section end =============== -->

    <!-- About-us-counter section End -->

    <!-- =============== counter-section end =============== -->

    <!-- =============== Footer-action-section start =============== -->

    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-item">
                            <a href="index.html"><img alt="image" src="assets/images/bg/footer-logo.png"
                                    width="200px"></a>
                            <p>Escolha a nossa plataforma para suas compras e leilões de obras e desfrute de uma
                                experiência excepcional de compra, licitação e venda!</p>
                            <form>
                                <div class="input-with-btn d-flex jusify-content-start align-items-strech">
                                    <input type="text" placeholder="Introduza o seu Email">
                                    <button type="submit"><img alt="image"
                                            src="assets/images/icons/send-icon.svg"></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                        <div class="footer-item">
                            <h5>Navegação</h5>
                            <ul class="footer-list">
                                <li><a href="live-auction.html">Todos os Leilões</a></li>
                                <li><a href="how-works.html">Como Funciona</a></li>
                                <li><a href="login.php">Conta</a></li>
                                <li><a href="about.html">Sobre Nós</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                        <div class="footer-item">
                            <h5>Ajuda & FAQs</h5>
                            <ul class="footer-list">
                                <li><a href="product.html">Centro de Ajuda</a></li>
                                <li><a href="faq.html">Cliente FAQs</a></li>
                                <li><a href="login.html">Termos e Condições</a></li>
                                <li><a href="about.html">Informações de Segurança</a></li>
                                <li><a href="blog.html">Vendedor e Políticas</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row d-flex align-items-center g-4">
                    <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                        <p>Copyright 2023 <a href="#">LICITAME</a> | Design Por <a href="#" class="egns-lab">Grupo 1</a>
                        </p>
                    </div>
                    <div
                        class="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                        <!--<p class="d-sm-flex d-none">Aceitamos:</p>
                        <ul class="footer-logo-list">
                            <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay1.png"></a></li>
                            <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay2.png"></a></li>
                            <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay3.png"></a></li>
                            <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay4.png"></a></li>
                            <li><a href="#"><img alt="image" src="assets/images/bg/footer-pay5.png"></a></li>
                        </ul>
                        -->
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- =============== Footer-action-section end =============== -->

    <!-- js file link -->
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <script src="assets/js/jquery-ui.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/swiper-bundle.min.js"></script>
    <script src="assets/js/slick.js"></script>
    <script src="assets/js/jquery.nice-select.js"></script>
    <script src="assets/js/odometer.min.js"></script>
    <script src="assets/js/viewport.jquery.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="ourChanges/form-peritoScript.js"></script>
</body>

</html>