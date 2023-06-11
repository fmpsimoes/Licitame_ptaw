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
    $mail->addAddress('raul.silva@ua.pt','Transportadora');

    $mail->isHTML(true);
    $mail->Subject='Novo pedido de entrega Armazém -> Vendedor';
    $mail->Body="Pedimos que faça a entrega da seguinte peça de arte de volta para o vendedor:<br><br>
    <div style='border: solid 2px #32c36c;border-radius:20px;padding:10px'>
    <span style='color:#029e7c;'>Nome do Vendedor:</span> <b>{$rowSeller['nome']} {$data['apelido']}</b><br><br>
    <span style='color:#029e7c;'>Contacto:</span> {$rowSeller['contactotelefonico']}<br><br>
    <span style='color:#029e7c;'>Email:</span> <b>{$rowSeller['emailvendedor']}</b><br><br>
    <span style='color:#029e7c;'>Nome da Peça:</span> {$rowSeller['titulo']}<br><br>
    <span style='color:#029e7c;'>Morada do Armazém (Origem):</span> <b>R. Cmte. Pinho e Freitas 28, 3750-127 Águeda</b><br><br>
    <span style='color:#029e7c;'>Morada do Vendedor (Destino):</span> <b>{$rowSeller['morada']} {$rowSeller['porta']}, {$rowSeller['codigopostal']} {$rowSeller['concelho']}</b><br><br>
    <span style='color:#029e7c;'>Categoria:</span> <b>{$rowSeller['categoria']}</b><br><br>
    <span style='color:#029e7c;'>Materiais:</span> <b>{$rowSeller['materiais']}</b><br><br>
    <span style='color:#029e7c;'>Dimensões:</span> <b>{$rowSeller['dimensoes']}</b><br><br>
    <span style='color:#029e7c;'>Peso:</span> <b>{$rowSeller['peso']}</b><br><br>
    <span style='color:#029e7c;'>Estado:</span> {$rowSeller['condicao']}<br><br>
    <span style='color:#029e7c;'>Descrição:</span> {$rowSeller['descricao']}
    </div><br>

    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";

    $mail->send();
    
} catch (Exception $e) {
    
}
?>