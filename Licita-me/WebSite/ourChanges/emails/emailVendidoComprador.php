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
    $mail->CharSet = "UTF-8";

    $mail->setFrom('noreply.licitame@gmail.com','LICITAME');
    $mail->addAddress("{$rowBid['licitador']}",'Comprador');

    $mail->isHTML(true);
    $mail->Subject="Ganhou a Peça: {$row['titulo']}";
    $mail->Body="Parabéns, é o licitador vencedor da seguinte peça:<br><br>
    <div style='border: solid 2px #32c36c;border-radius:20px;padding:10px'>
    <span style='color:#029e7c;'>Nome da Peça:</span> {$row['titulo']}<br><br>
    <span style='color:#029e7c;'>Categoria:</span> {$row['categoria']}<br><br>
    <span style='color:#029e7c;'>Materiais:</span> {$row['materiais']}<br><br>
    <span style='color:#029e7c;'>Data de Fim:</span> {$row['datafim']}<br><br>
    <span style='color:#029e7c;'>Dimensões:</span> {$row['dimensoes']}<br><br>
    <span style='color:#029e7c;'>Peso:</span> {$row['peso']} Kg<br><br>
    <span style='color:#029e7c;'>Autor:</span> {$row['autor']}<br><br>
    <span style='color:#029e7c;'>Período Estimado:</span> {$row['periodo']}<br><br>
    <span style='color:#029e7c;'>Valor:</span> <b>{$rowBid['valorlicitacao']} €</b><br><br>
    <span style='color:#029e7c;'>Condição:</span> {$row['condicao']}<br><br>
    <span style='color:#029e7c;'>Descrição:</span> {$row['descricao']}<br><br>
    <span style='color:#029e7c;'>Certificado:</span> Em Anexo
    </div><br>

    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";

    //Anexar o certificado
    $attachmentPath = '../certificados/certificado_37_1.pdf';
    $mail -> addAttachment($attachmentPath);

    $mail->send();
    
} catch (Exception $e) {
    
}
?>