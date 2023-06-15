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
    $mail->addAddress("{$row['emailvendedor']}",'Vendedor');

    $mail->isHTML(true);
    $mail->Subject="Peça: {$row['titulo']} - Aprovada e Leilão Ativo Agora!";
    $mail->Body="A sua peça foi aprovada e já está em leilão.<br><br>
    <div style='border: solid 2px #32c36c;border-radius:20px;padding:10px'>
    <span style='color:#029e7c;'>Nome da Peça:</span> {$row['titulo']}<br><br>
    <span style='color:#029e7c;'>Categoria:</span> {$row['categoria']}<br><br>
    <span style='color:#029e7c;'>Materiais:</span> {$row['materiais']}<br><br>
    <span style='color:#029e7c;'>Data de Início:</span> <b>{$row['datainicio']}</b><br><br>
    <span style='color:#029e7c;'>Data de Fim:</span> <b>{$row['datafim']}</b><br><br>
    <span style='color:#029e7c;'>Dimensões:</span> {$row['dimensoes']}<br><br>
    <span style='color:#029e7c;'>Peso:</span> {$row['peso']}<br><br>
    <span style='color:#029e7c;'>Autor:</span> {$row['autor']}<br><br>
    <span style='color:#029e7c;'>Período Estimado:</span> {$row['periodo']}<br><br>
    <span style='color:#029e7c;'>Preço Base:</span> <b>{$row['precobase']}</b><br><br>
    <span style='color:#029e7c;'>Preço Comprar Já:</span> <b>{$row['precocomprarja']}</b><br><br>
    <span style='color:#029e7c;'>Condição:</span> {$row['condicao']}<br><br>
    <span style='color:#029e7c;'>Descrição:</span> {$row['descricao']}
    <span style='color:#029e7c;'>Certificado:</span> Em Anexo}
    </div><br>

    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";

    //Anexar o certificado
    $attachmentPath = $row['dircertificado'];
    $mail -> addAttachment($attachmentPath);

    $mail->send();
    
} catch (Exception $e) {
    
}
?>