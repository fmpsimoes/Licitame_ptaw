<?php 
    session_start();
    // Get the data from the AJAX request
    // connect to database
    $host = 'localhost';
    $port = '5432';
    $dbname = 'ptaw-2023-gr1';
    $userbd = 'ptaw-2023-gr1';
    $password = 'ptaw-2023-gr1';

    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
        $stmt = $pdo->prepare("SELECT * FROM pecasarte WHERE emailcomprador= ? AND estado='Vendido'");
        $stmt->execute([ $_SESSION["email"]]);
        $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($row);
    }catch(PDOException $e) {
       echo json_encode("Erro: " . $e->getMessage());
    }
    
?>