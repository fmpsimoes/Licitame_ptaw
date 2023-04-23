<?php 

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
    $query = "INSERT INTO pedidoDeLeilao (email, nomeItem, categoria, materiais, dataInicioItem, dataFImItem, dimensoes, peso, autor, periodoEstimado, valorBase, valorCompra, descricao, imagens, certificado, paraCertificar) 
            values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    $statement = $pdo->prepare( $query );

    if($statement->execute( array($email, $nameitem, $category, $materials ,$dataStartItem, $dataEndItem, $dimensions, $weight, $author, $periodEstimated, $valueBase, $valueBuyNow, $description, $images, $certification, $certificationCheckBox))){
        $row = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($row);
    }else{
        echo "Erro ao inserir leilão";
    }
}catch(PDOException $e) {
    echo "Erro: " . $e->getMessage();
}

?>