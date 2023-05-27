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
    $mail->Subject='Novo pedido de entrega Armazém -> Comprador';
    $mail->Body="Pedimos que faça a entrega da seguinte peça de arte comprada:<br><br>
    <div style='border: solid 2px #32c36c;border-radius:20px;padding:10px'>
    <span style='color:#029e7c;'>Nome do Comprador:</span> <b>{$data['primeiroNomeComprador']} {$data['ultimoNomeComprador']}</b><br><br>
    <span style='color:#029e7c;'>Contacto:</span> {$data['contacto']}<br><br>
    <span style='color:#029e7c;'>Email:</span> <b>{$data['email']}</b><br><br>
    <span style='color:#029e7c;'>Nome da Peça:</span> {$data['nome']}<br><br>
    <span style='color:#029e7c;'>Morada do Armazém (Origem):</span> <b>R. Cmte. Pinho e Freitas 28, 3750-127 Águeda</b><br><br>
    <span style='color:#029e7c;'>Morada do Comprador (Destino):</span> <b>{$data['morada']} {$data['porta']}, {$data['zipcode']} {$data['concelho']}</b><br><br>
    <span style='color:#029e7c;'>Categoria:</span> <b>{$data['categoria']}</b><br><br>
    <span style='color:#029e7c;'>Materiais:</span> <b>{$data['materiais']}</b><br><br>
    <span style='color:#029e7c;'>Dimensões:</span> <b>{$data['dimensoes']}</b><br><br>
    <span style='color:#029e7c;'>Peso:</span> <b>{$data['peso']}</b><br><br>
    <span style='color:#029e7c;'>Estado:</span> {$data['estado']}<br><br>
    <span style='color:#029e7c;'>Valor:</span> {$data['valor']}<br><br>
    <span style='color:#029e7c;'>Descrição:</span> {$data['descricao']}
    </div><br>

    <img alt='logo licitame' src='https://i.imgur.com/negCNil.png' width='200px' height='45px' style='background:#32c36c;margin:auto;display:block;'/>";

    $mail->send();
    
} catch (Exception $e) {
    
}
?>