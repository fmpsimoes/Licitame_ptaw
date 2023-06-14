<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
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
    $mail->addAddress('miguelmvieira@ua.pt','Miguel');

    $mail->isHTML(true);
    $mail->Subject='teste email server licitame';
    $mail->Body="Corpo de mail de <b>teste</b> ";

    $mail->send();
    
} catch (Exception $e) {
    
}
?>