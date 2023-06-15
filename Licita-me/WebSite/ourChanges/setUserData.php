<?php 
session_start();

// Get the data from the AJAX request
$data = $_POST['data'];

// connect to database
$host = 'localhost';
$port = '5432';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    if ($_SESSION['tipoutilizador'] == 'Utilizador') {
        if ($data["pass1"] == "") {
            $stmt = $pdo->prepare("UPDATE utilizadores SET nome = ?, apelido = ?, contactotelefonico = ?, morada = ?, porta = ?, codigopostal = ?, concelho = ? WHERE email = ?");
            $stmt->execute([$data["nome"], $data["apelido"], $data["contacto"], $data["morada"], $data["porta"], $data["codpostal"], $data["concelho"],  $data["email"]]);
            updateDataUtilizador($data);
            echo json_encode("Dados Alterados com Sucesso");
        } else {
            $stmt = $pdo->prepare("UPDATE utilizadores SET nome = ?, apelido = ?, contactotelefonico = ?, morada = ?, porta = ?, codigopostal = ?, concelho = ?, pass = ? WHERE email = ?");
            $stmt->execute([$data["nome"], $data["apelido"], $data["contacto"], $data["morada"], $data["porta"], $data["codpostal"], $data["concelho"], $data["pass1"], $data["email"]]);   
            updateDataUtilizador($data);
            echo json_encode("Dados Alterados com Sucesso");
        }
    }
    if ($_SESSION['tipoutilizador'] == 'Perito') {
        if ($data["pass1"] == "") {
            $stmt = $pdo->prepare("UPDATE utilizadores SET nome = ?, apelido = ?, contactotelefonico = ? WHERE email = ?");
            $stmt->execute([$data["nome"], $data["apelido"], $data["contacto"], $_SESSION["email"]]); 
            updateDataPerito($data);
            echo json_encode("Dados Alterados com Sucesso");
        } else {
            $stmt = $pdo->prepare("UPDATE utilizadores SET nome = ?, apelido = ?, contactotelefonico = ?, pass = ? WHERE email = ?");
            $stmt->execute([$data["nome"], $data["apelido"], $data["contacto"], $data["pass1"], $_SESSION["email"]]);
            updateDataPerito($data);
            echo json_encode("Dados Alterados com Sucesso");
        }
    }
    
} catch (PDOException $e) {
    echo json_encode("Erro: " . $e->getMessage());
}

function updateDataUtilizador($data){
    $_SESSION['nome'] = $data['nome'];
    $_SESSION['apelido'] = $data['apelido'];
    $_SESSION['contactotelefonico'] = $data['contacto'];
    $_SESSION['morada'] = $data['morada'];
    $_SESSION['porta'] = $data['porta'];
    $_SESSION['codigopostal'] = $data['codpostal'];
    $_SESSION['concelho'] = $data['concelho'];
}
function updateDataPerito($data){
    $_SESSION['nome'] = $data['nome'];
    $_SESSION['apelido'] = $data['apelido'];
    $_SESSION['contactotelefonico'] = $data['contacto'];
}
?>
