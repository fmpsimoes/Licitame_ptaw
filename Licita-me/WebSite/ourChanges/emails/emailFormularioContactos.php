<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../PHPMailer/src/PHPMailer.php';
require '../../PHPMailer/src/Exception.php';
require '../../PHPMailer/src/SMTP.php';


$mail=new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host='smtp.gmail.com';
    $mail->SMTPAuth=true;
    $mail->Username='noreply.licitame@gmail.com';
    $mail->Password='exzuoebmwnwzypvm';
    $mail->SMTPSecure='tls';
    $mail->Port=587;
    $mail->CharSet = "UTF-8";

    $data = $_POST['data'];

    $mail->setFrom('noreply.licitame@gmail.com','LICITAME');
    $mail->addAddress('noreply.licitame@gmail.com','LICITAME');

    $mail->isHTML(true);
    $mail->Subject="Contacto - {$data['assunto']}";
    $mail->Body= "Email: {$data['email']} <br>
    Nome: {$data['nome']} <br>
    Contacto: {$data['telemovel']} <br>
    Mensagem: {$data['mensagem']}";
    
    $mail->send();

    echo "Sucesso";
    
} catch (Exception $e) {
    
}
?>