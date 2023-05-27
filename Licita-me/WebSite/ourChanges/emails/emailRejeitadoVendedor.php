<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/SMTP.php';


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

    $mail->setFrom('noreply.licitame@gmail.com','LICITAME');
    $mail->addAddress("{$data['email']}",'Vendedor');

    $mail->isHTML(true);
    $mail->Subject="Peça: {$data['nome']} - Rejeitada!";
    $mail->Body="A sua peça foi rejeitada e será devolvida pela transportadora.<br><br>
    <div style='border: solid 2px #32c36c;border-radius:20px;padding:10px'>
    <span style='color:#029e7c;'>Nome da Peça:</span> {$data['titulo']}<br><br>
    <span style='color:#029e7c;'>Categoria:</span> {$data['categoria']}<br><br>
    <span style='color:#029e7c;'>Descrição:</span> {$data['descricao']}<br><br>
    <span style='color:#029e7c;'><b>Aguarde contacto por parte da transportadora para combinar a entrega da sua peça.</b></span>
    </div><br>

    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";
    
    $mail->send();
    
} catch (Exception $e) {
    
}
?>