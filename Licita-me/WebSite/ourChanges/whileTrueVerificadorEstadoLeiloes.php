<?php
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/SMTP.php';
while(true){
    include 'verificarEstadoLeiloes.php';
    usleep(60000000);
}
?>