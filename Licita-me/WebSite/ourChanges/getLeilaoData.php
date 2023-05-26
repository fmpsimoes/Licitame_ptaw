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
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try{
        $query = "SELECT * FROM pecasarte WHERE id= ?";
        $statement = $pdo->prepare($query);
        if($statement->execute(array($data))){
            $row = $statement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($row);
        }else{
            echo "Erro ao carregar dados de leilão";
        }
    }catch(PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
}catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}
?>