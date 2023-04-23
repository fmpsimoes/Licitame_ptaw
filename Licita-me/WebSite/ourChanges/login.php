<?php 
    $servername = "";
    $username = "";
    $password = "";

    try {
        
        $pdo = new PDO("mysql:host=$servername;dbname=ptw", $username, $password);
            //set the PDO error mode to exception
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        
        $query = "SELECT tipoUtilizador FROM Utilizadores WHERE email = ? AND password = ?";

        $statement = $pdo->prepare( $query );

        $statement->execute( array($email, $password) ) ;

        $row = $statement->fetchAll(PDO::FETCH_ASSOC);
    
        // Para testar se a $row retorna: $row = "administrador" ou $row = "utilizador" ou $row = "perito";
        // Para testar se a $row não retorna: $row=""
        
        if($row){
            if ($row == 'administrador') {
                echo json_encode(array('redirect' => 'email.php '));
            } elseif ($row == 'utilizador') {
                echo json_encode(array('redirect' => 'user.php'));
            } elseif ($row == 'perito') {
                echo json_encode(array('redirect' => 'expert.php'));
            }
            $statement=null;
            $pdo = null;

        }else{
            echo json_encode(array("error" => "Email ou password erradas. Por favor tenta outra vez."));
        }

    }catch(PDOException $e) {
       echo "Erro: " . $e->getMessage();
    }
    
?>
 