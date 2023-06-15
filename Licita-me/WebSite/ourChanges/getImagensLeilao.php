<?php 
session_start();
$data = $_POST['data'];
$host = 'localhost';
$port = '5432';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try{
        $queryfotos = "SELECT dirimagem FROM fotografias WHERE idpecaarte= ?";
        $statementfotos = $pdo->prepare($queryfotos);
        if($statementfotos->execute(array($data))){
            $fotos = $statementfotos->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(["fotos" => $fotos]);
        }else{
            echo "Erro ao carregar fotos de leilão";
        }
    }catch(PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
}catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}
?>