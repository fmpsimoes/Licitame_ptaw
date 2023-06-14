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
    $mail->addAddress('raul.silva@ua.pt','Transportadora');

    $mail->isHTML(true);
    $mail->Subject='Novo pedido de entrega Armazém -> Vendedor';
    $mail->Body="Pedimos que faça a entrega da seguinte peça de arte de volta para o vendedor:<br><br>
    <div style='border: solid 2px #32c36c;border-radius:20px;padding:10px'>
    <span style='color:#029e7c;'>Nome do Vendedor:</span> <b>{$rowSeller['nome']} {$rowSeller['apelido']}</b><br><br>
    <span style='color:#029e7c;'>Contacto:</span> {$rowSeller['contactotelefonico']}<br><br>
    <span style='color:#029e7c;'>Email:</span> <b>{$rowSeller['email']}</b><br><br>
    <span style='color:#029e7c;'>Nome da Peça:</span> {$row['titulo']}<br><br>
    <span style='color:#029e7c;'>Morada do Armazém (Origem):</span> <b>R. Cmte. Pinho e Freitas 28, 3750-127 Águeda</b><br><br>
    <span style='color:#029e7c;'>Morada do Vendedor (Destino):</span> <b>{$rowSeller['morada']} {$rowSeller['porta']}, {$rowSeller['codigopostal']} {$rowSeller['concelho']}</b><br><br>
    <span style='color:#029e7c;'>Categoria:</span> <b>{$row['categoria']}</b><br><br>
    <span style='color:#029e7c;'>Materiais:</span> <b>{$row['materiais']}</b><br><br>
    <span style='color:#029e7c;'>Dimensões:</span> <b>{$row['dimensoes']}</b><br><br>
    <span style='color:#029e7c;'>Peso:</span> <b>{$row['peso']}</b><br><br>
    <span style='color:#029e7c;'>Estado:</span> {$row['condicao']}<br><br>
    <span style='color:#029e7c;'>Descrição:</span> {$row['descricao']}
    </div><br>

    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";

    $mail->send();
    
} catch (Exception $e) {
    
}
?>