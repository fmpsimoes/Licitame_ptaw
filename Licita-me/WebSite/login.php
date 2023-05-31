<?php
session_start();
if(isset($_SESSION['email'])) {
    if($_SESSION['tipoutilizador'] == 'Utilizador'){ // redirect to dashboard if user already logged in
        header("Location: dashboard.php");
    } elseif($_SESSION['tipoutilizador'] == 'Administrador'){
        header("Location: dashboardAdmin.php");
    } elseif($_SESSION['tipoutilizador'] == 'Perito'){
        header("Location: dashboardPerito.php");
    }
}
?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Iniciar Sessão</title>
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

        <!-- style css -->
        <link rel="stylesheet" href="assets/css/modal.css">
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
            <h2 class="inner-banner-title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".2s">Entrar</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Página Inicial</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Entrar</li>
                </ol>
              </nav>
        </div>
    </div>

    <!-- ========== inner-page-banner end ============= -->

    <div class="login-section pt-120 pb-120">
        <img alt="imges" src="assets/images/bg/section-bg.png" class="img-fluid section-bg-top" >
        <img alt="imges" src="assets/images/bg/section-bg.png" class="img-fluid section-bg-bottom" >
        <div class="container">
            <div class="row d-flex justify-content-center g-4">
                <div class="col-xl-7 col-lg-9 col-md-10">
                    <div class="form-wrapper wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                        <div class="form-title">
                            <h3>Entrar</h3>
                            <p>Novo membro? <a href="signup.html">Cria conta aqui</a></p>
                        </div>
                        <form class="w-100" enctype="multipart/form-data" id="form12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-inner">
                                        <label>Email *</label>
                                        <input type="email" placeholder="Email" name="email" id="email" required>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-inner">
                                        <label>Password *</label>
                                        <input type="password" name="password" id="password" placeholder="Password" required/>
                                        <i class="bi bi-eye-slash" id="togglePassword"></i>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                        <div class="form-group">
                                            
                                        </div>
                                        <a href="#" class="forgot-pass">Esqueci-me da palavra-passe</a>
                                    </div>
                                </div>
                            </div>
                            <button class="account-btn" id="loginButton">Entrar</button>
                        </form>
                        <div class="form-poicy-area">
                            <p>Ao clicar no botão "Entrar", cria uma conta LICITAME, e concorda com a política de privacidade da Licita-me <a href="#myModal" data-toggle= "modal" data-target = "#myModal" id= "termosLink">Termos & Condições</a> & <a href="#privacyModal" data-toggle="modal" data-target="#privacyModal" id = "privacyLink">Política de privacidade.</a></p>
                            <div id="myModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <h5>Termos de Uso e Condições - Site de Leilões Online de Peças de Arte - LICITAME</h5>

                                <p id="texto"></p>
                                <p id="textoP1"></p>
                                <p id="textoP12"></p>
                                <p id="textoP13"></p>
                                <p id="textoP2"></p>
                                <p id="textoP22"></p>
                                <p id="textoP3"></p>
                                <p id="textoP32"></p>
                                <p id="textoP4"></p>
                                <p id="textoP42"></p>
                                </div>
                            </div>

                            <div id="privacyModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <h5>Política de Privacidade - Site de Leilões Online de Peças de Arte</h5>
                                
                                <p id ="textoPrivacy"></p>
                                <p id = "textoPrivacyP1"></p>
                                <p id = "textoPrivacyP12"></p>
                                <p id = "textoPrivacyP2"></p>
                                <p id = "textoPrivacyP22"></p>
                                <p id = "textoPrivacyP3"></p>
                                <p id = "textoPrivacyP32"></p>
                                <p id = "textoPrivacyP4"></p>
                                <p id = "textoPrivacyP42"></p>
                                <p id = "textoPrivacyP5"></p>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- ===============  Hero area end=============== -->

    <!-- =============== Footer-action-section start =============== -->

    <footer id="footer">
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
    <script src="assets/js/modal.js"></script>
    <script src="ourChanges/callCommonSections.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="ourChanges/login.js"></script>

</body>

</html>