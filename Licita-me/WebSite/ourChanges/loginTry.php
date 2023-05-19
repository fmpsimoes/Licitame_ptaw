<?php 
    session_start();
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
        
        // check if email and password are correct
        $stmt = $pdo->prepare("SELECT email, nome, apelido, contactotelefonico, morada, porta, codigopostal, concelho, tipoUtilizador FROM utilizadores WHERE email = ? AND pass = ?");
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
            $_SESSION['tipoUtilizador'] = $user['tipoUtilizador'];

            if ($user['tipoUtilizador'] == 'Administrador') {
                echo 'dashboardAdmin.php';
            } elseif ($user['tipoUtilizador'] == 'Utilizador') {
                echo 'dashboard.php';
            } elseif ($user['tipoUtilizador'] == 'Perito') {
                echo 'dashboardPerito.php';
            }
        } else { //user not found
            echo "Email ou password errada";
        }

    }catch(PDOException $e) {
       echo "Erro: " . $e->getMessage();
    }
    
?>
 