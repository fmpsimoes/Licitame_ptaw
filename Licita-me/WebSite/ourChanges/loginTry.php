<?php 
    session_start();
    // Get the data from the AJAX request
    $data = $_POST['data'];

    // connect to database
    $host = 'localhost';
    $port = '5432';
    $dbname = 'ptaw-2023-gr1';
    $user = 'ptaw-2023-gr1';
    $password = 'ptaw-2023-gr1';

    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");

        // check if email and password are correct
        $stmt = $pdo->prepare("SELECT email, nome, apelido, contactotelefonico, morada, porta, codigopostal, concelho, tipoutilizador FROM utilizadores WHERE email = ? AND pass = ?");
        $stmt->execute([$data["email"], $data["pass"]]);
        $user = $stmt->fetch();

        if($user) { //user found
            // define session variables
            $_SESSION['email'] = $data["email"];
            $_SESSION['nome'] = $user['nome'];
            $_SESSION['apelido'] = $user['apelido'];
            $_SESSION['contactotelefonico'] = $user['contactotelefonico'];
            $_SESSION['morada'] = $user['morada'];
            $_SESSION['porta'] = $user['porta'];
            $_SESSION['codigopostal'] = $user['codigopostal'];
            $_SESSION['concelho'] = $user['concelho'];
            $_SESSION['tipoutilizador'] = $user['tipoutilizador'];

           
            if ($user['tipoutilizador'] == 'Utilizador') {
                echo json_encode('dashboard.php');
            } elseif ($user['tipoutilizador'] == 'Perito') {
                echo json_encode('dashboardPerito.php');
            }else{
                echo json_encode("Email ou password errada");
            }
        } else { //user not found
            echo json_encode("Email ou password errada");
        }

    }catch(PDOException $e) {
       echo json_encode("Erro: " . $e->getMessage());
    }

?>