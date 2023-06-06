<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../PHPMailer/src/PHPMailer.php';
require '../../PHPMailer/src/Exception.php';
require '../../PHPMailer/src/SMTP.php';

$data = $_POST['data'];
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'noreply.licitame@gmail.com';
    $mail->Password = 'exzuoebmwnwzypvm';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->CharSet = "UTF-8";

    $mail->setFrom('noreply.licitame@gmail.com', 'LICITAME');
    $mail->addAddress($data['email'], 'Novo Cliente');

    $mail->isHTML(true);
    $mail->Subject = 'Envio do codigo de Verificação';
    $mail->Body = "Codigo:<br>{$data['verificationcode']}<br><br>
    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";

    $mail->send();
    //echo "Sucesso";
} catch (Exception $e) {
    echo "erro ao enviar email!";
}
?>