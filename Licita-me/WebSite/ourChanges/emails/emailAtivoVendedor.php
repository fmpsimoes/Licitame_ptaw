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
    $mail->Subject="Peça: {$data['nome']} - Aprovada e Leilão Ativo Agora!";
    $mail->Body="A sua peça foi aprovada e já está em leilão.<br><br>
    <div style='border: solid 2px #32c36c;border-radius:20px;padding:10px'>
    <span style='color:#029e7c;'>Nome da Peça:</span> {$data['titulo']}<br><br>
    <span style='color:#029e7c;'>Categoria:</span> {$data['categoria']}<br><br>
    <span style='color:#029e7c;'>Materiais:</span> {$data['materiais']}<br><br>
    <span style='color:#029e7c;'>Data de Início:</span> <b>{$data['datainicio']}</b><br><br>
    <span style='color:#029e7c;'>Data de Fim:</span> <b>{$data['datatermino']}</b><br><br>
    <span style='color:#029e7c;'>Dimensões:</span> {$data['dimensoes']}<br><br>
    <span style='color:#029e7c;'>Peso:</span> {$data['peso']}<br><br>
    <span style='color:#029e7c;'>Autor:</span> {$data['autor']}<br><br>
    <span style='color:#029e7c;'>Período Estimado:</span> {$data['periodo']}<br><br>
    <span style='color:#029e7c;'>Preço Base:</span> <b>{$data['precobase']}</b><br><br>
    <span style='color:#029e7c;'>Preço Comprar Já:</span> <b>{$data['precocomprarja']}</b><br><br>
    <span style='color:#029e7c;'>Condição:</span> {$data['condicao']}<br><br>
    <span style='color:#029e7c;'>Descrição:</span> {$data['descricao']}
    <span style='color:#029e7c;'>Certificado:</span> Em Anexo}
    </div><br>

    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";

    //Anexar o certificado
    $attachmentPath = '../certificados/certificado_37_1.pdf';
    $mail -> addAttachment($attachmentPath);

    $mail->send();
    
} catch (Exception $e) {
    
}
?>