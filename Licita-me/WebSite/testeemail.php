<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/SMTP.php';


$mail=new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host='smtp.gmail.com';
    $mail->SMTPAuth=true;
    $mail->Username='noreply.licitame@gmail.com';
    $mail->Password='exzuoebmwnwzypvm';
    $mail->SMTPSecure='tls';
    $mail->Port=587;

    $mail->setFrom('noreply.licitame@gmail.com','LICITAME');
    $mail->addAddress('raul.silva@ua.pt','Raul');

    $mail->isHTML(true);
    $mail->Subject='teste email server licitame';
    $mail->Body='Corpo de mail de <b>teste</b>';

    $mail->send();
    
} catch (Exception $e) {
    
}
?>