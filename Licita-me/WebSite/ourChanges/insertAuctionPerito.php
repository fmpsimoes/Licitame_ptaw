<?php 
session_start();

$data = $_POST['data'];

$host = 'localhost';
$port = '5433';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    $query = "UPDATE pecasarte SET emailperito= ?, titulo=?, descricao=?, categoria=?, materiais=?, dimensoes=?, peso=?, autor=?, periodo=?, estado=?, valorapreciacaoprecobase=?, valorapreciacaocompraja=?, datacertificacao=?, condicao=? WHERE id= ?";
    $statement = $pdo->prepare($query);
    if($statement->execute([$_SESSION['email'], $data['nome'], $data['descricao'], $data['categoria'] , $data['materiais'], $data['dimensoes'], $data['peso'],  $data['autor'], $data['periodo'], $data['estado'], $data['valorInicialPerito'], $data['valorCompraImediataPerito'], $data['datacertificacao'], $data['condicao'], $data['idpeca']])){
        $row = $statement->fetchColumn();
        echo json_encode($row);
    }else{
        echo "Erro ao inserir leilão";
    }
}catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}


?>