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
    $mail->Subject="Vendou a Peça: {$data['nome']}";
    $mail->Body="Parabéns, a sua peça foi vendida por {$data['valor']}.<br><br>
    <div style='border: solid 2px #32c36c;border-radius:20px;padding:10px'>
    <span style='color:#029e7c;'>Nome da Peça:</span> {$data['titulo']}<br><br>
    <span style='color:#029e7c;'>Categoria:</span> {$data['categoria']}<br><br>
    <span style='color:#029e7c;'>Data de Fim:</span> {$data['datatermino']}<br><br>
    <span style='color:#029e7c;'>Autor:</span> {$data['autor']}<br><br>
    <span style='color:#029e7c;'>Período Estimado:</span> {$data['periodo']}<br><br>
    <span style='color:#029e7c;'>Valor:</span> <b>{$data['valor']}</b><br><br> "/* data['valor'] placeholder mudar */+"
    <span style='color:#029e7c;'>Descrição:</span> {$data['descricao']}
    </div><br>

    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";

    $mail->send();
    
} catch (Exception $e) {
    
}
?>