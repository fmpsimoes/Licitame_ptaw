<?php 
    session_start();
    // Get the data from the AJAX request
    $data = $_POST['data'];

    // connect to database
    $host = 'localhost';
    $port = '5433';
    $dbname = 'ptaw-2023-gr1';
    $userbd = 'ptaw-2023-gr1';
    $password = 'ptaw-2023-gr1';

    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
        
        // check if email and password are correct
        $stmt = $pdo->prepare("UPDATE utilizadores SET nome = ?, apelido = ?, contactotelefonico = ?, morada = ?, porta = ?, codigopostal = ?, concelho = ?, pass=?  WHERE email = ?");
        $stmt->execute([$data["nome"], $data["apelido"], $data["contacto"], $data["morada"], $data["porta"], $data["codpostal"], $data["concelho"], $data["pass1"], $data["email"]]);
        $user = $stmt->fetch();
        echo json_encode("Dados Alterados com Sucesso");
    }catch(PDOException $e) {
       echo json_encode("Erro: " . $e->getMessage());
    }
    
?>