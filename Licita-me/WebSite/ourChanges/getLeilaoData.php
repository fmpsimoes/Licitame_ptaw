<?php 
$data = $_GET['idLeilao'];
$servername = "";
$username = "";
$password = "";
try{
    $pdo = new PDO("mysql:host=$servername;dbname=ptw", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}

try{
    $query = "SELECT * from";

    $statement = $pdo->prepare( $query );

    if($statement->execute(array($data))){
        $row = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($row);
    }else{
        echo "Erro ao carregar dados de leilão";
    }
}catch(PDOException $e) {
    echo "Erro: " . $e->getMessage();
}

?>