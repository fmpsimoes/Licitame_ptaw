<?php 
session_start();

$data = $_POST['data'];

$host = 'localhost';
$port = '5433';
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
    if(($statement->execute([$_SESSION['email'], $data['nome'], $data['descricao'], $data['categoria'] , $data['materiais'], $data['dimensoes'], $data['peso'],  $data['autor'], $data['periodo'], $data['estado'], $data['valorInicialPerito'], $data['valorCompraImediataPerito'], $data['datacertificacao'], $data['condicao'], $data['datainicio'], $data['datafim'], $data['idpeca']])) && ($statement1->execute([$data['idpeca']]))){
        if( $data['estado'] == "Aprovado" || $data['estado'] == "Ativo"){
            echo ("Leilão aprovado com sucesso!");
        }if($data['estado'] == "Rejeitado"){
            echo ("Leilão rejeitado!");
        }
    }else{
        echo "Erro ao inserir leilão";
    }
}catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}


?>