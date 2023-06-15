<?php
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/SMTP.php';
session_start();

$data = $_POST['data'];

$host = 'localhost';
$port = '5432';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';

foreach ($data as $key => $value) {
    // Check if the value is an empty string
    if ($value === '') {
        // Set the value to NULL
        $data[$key] = NULL;
    }
}

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    $query = "UPDATE pecasarte SET emailperito= ?, titulo=?, descricao=?, categoria=?, materiais=?, dimensoes=?, peso=?, autor=?, periodo=?, estado=?, valorapreciacaoprecobase=?, valorapreciacaocompraja=?, datacertificacao=?, condicao=?, datainicio=?, datafim=? WHERE id= ?";
    $query1 = "DELETE FROM fotografias WHERE idpecaarte=?;";
    $statement = $pdo->prepare($query);
    $statement1 = $pdo->prepare($query1);
    if (($statement->execute([$_SESSION['email'], $data['nome'], $data['descricao'], $data['categoria'], $data['materiais'], $data['dimensoes'], $data['peso'], $data['autor'], $data['periodo'], $data['estado'], $data['valorInicialPerito'], $data['valorCompraImediataPerito'], $data['datacertificacao'], $data['condicao'], $data['datainicio'], $data['datafim'], $data['idpeca']])) && ($statement1->execute([$data['idpeca']]))) {
        if ($data['estado'] == "Aprovado" || $data['estado'] == "Ativo") {
            $dateTime = new DateTime($data['datainicio']);
            $data['datainicio']= $dateTime->format('Y-m-d H:i:s');
            $dateTime = new DateTime($data['datafim']);
            $data['datafim']= $dateTime->format('Y-m-d H:i:s');
            if ($data['estado'] == "Aprovado") {
                include './emails/emailAprovadoVendedor.php';
            } else {
                $row=$data;
                $row['id']=$data['idpeca'];
                $row['titulo']=$data['nome'];
                $row['valorapreciacaoprecobase']=$data['valorInicialPerito'];
                $row['valorapreciacaocompraja']=$data['valorCompraImediataPerito'];
                include './emails/emailAtivoVendedor.php';
            }
            echo ("Leilão aprovado com sucesso!");
            exit;
        }
        if ($data['estado'] == "Rejeitado") {
            $data['primeiroNomeVendedor']=$data['nome2'];
            $data['ultimoNomeVendedor']=$data['apelido'];
            $data['contacto']=$data['contactotelefonico'];
            $data['nome']=$data['titulo'];
            $dateTime = new DateTime($data['datainicio']);
            $data['datainicio']= $dateTime->format('Y-m-d H:i:s');
            $dateTime = new DateTime($data['datafim']);
            $data['datafim']= $dateTime->format('Y-m-d H:i:s');
            include './emails/emailRejeitadoVendedor.php';
            include './emails/emailRejeitadoArmazemParaVendedor.php';
            echo ("Leilão rejeitado!");
            exit;
        }
    } else {
        echo "Erro ao inserir leilão";
    }
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}


?>