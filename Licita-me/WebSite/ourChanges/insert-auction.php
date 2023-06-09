<?php 

session_start();

$data = $_POST['data'];
$null = null;
$host = 'localhost';
$port = '5433';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    if (empty($data['valorInicial'])) {
        $valorInicial = null;
    } else {
        $valorInicial = $data['valorInicial'];
    }
    if (empty($data['valorCompraImediata'])) {
        $valorCompraImediata = null;
    } else {
        $valorCompraImediata = $data['valorCompraImediata'];
    }
    $query = "INSERT INTO pecasarte (emailvendedor, titulo, categoria, materiais, datainicio, datafim, dimensoes, peso, autor, condicao, precobase, precocomprarja, descricao, estado) 
                values (?,?,?,?,?,?,?,?,?,?,?,?,?, 'Pendente') RETURNING id";
    $statement = $pdo->prepare($query);
    
    if ($statement->execute([$_SESSION['email'], $data['nome'], $data['categoria'], $data['materiais'], $data['dataPrefeInicio'], $data['dataPrefeTermino'], $data['dimensoes'], $data['peso'], $data['autor'],  $data['estado'], $valorInicial, $valorCompraImediata, $data['descricao']])) {
        $row = $statement->fetchColumn();

        echo json_encode($row);
        exit;
    } else {
        echo "Erro ao inserir leilão";
    }

}catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}

?>