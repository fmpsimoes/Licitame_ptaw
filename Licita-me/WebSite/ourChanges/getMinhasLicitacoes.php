<?php 
session_start();
$host = 'localhost';
$port = '5433';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try{
            $query = "SELECT licitacoes.pecaarte as id, licitacoes.valorlicitacao,  pecasarte.titulo, pecasarte.estado, (SELECT MAX(valorlicitacao) FROM licitacoes WHERE licitacoes.pecaarte=pecasarte.id) AS valoratualleilao FROM licitacoes INNER JOIN pecasarte ON licitacoes.pecaarte=pecasarte.id
            WHERE licitacoes.licitador = ?";
            $statement = $pdo->prepare($query );
            if($statement->execute([$_SESSION['email']])){
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