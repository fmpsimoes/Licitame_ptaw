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
        $query = "SELECT * FROM pecasarte INNER JOIN utilizadores ON pecasarte.emailvendedor=utilizadores.email WHERE id= ?";
        $queryfotos = "SELECT dirimagem FROM fotografias WHERE idpecaarte= ?";
        $statement = $pdo->prepare($query);
        $statementfotos = $pdo->prepare($queryfotos);
        if($statement->execute(array($data)) && $statementfotos->execute(array($data))){
            $data = $statement->fetchAll(PDO::FETCH_ASSOC);
            $fotos = $statementfotos->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(["data" => $data, "fotos" => $fotos]);
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