<?php
    // Get the data from the AJAX request
    $data = $_POST['data'];

    // connect to database
    $host = 'localhost';
    $port = '5432';
    $dbname = 'ptaw-2023-gr1';
    $user = 'ptaw-2023-gr1';
    $password = '-n?ZR-:$G!h-yQ,r';

    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");

        // insert new user
        $stmt = $pdo->prepare("INSERT INTO utilizadores (email, nome, apelido, pass) VALUES (?, ?, ?, ?)");
        $result = $stmt->execute([$data["email"], $data["nome"], $data["apelido"], $data["pass"]]);
        if($result) {
            echo "Sucesso";
        } else {
            echo "Erro a inserir novo utilizador";
        }

    }catch (PDOException $e) {
        if ($e->getCode() === '23505') {
            // 23505 codigo responsável por chave duplicada no PostgreSQL
            echo "Já existe uma conta com esse email!";
        }
        else {
            echo json_encode("Error inserting new user into database:" .  $e->getMessage());
            exit;
        }
    }
?>