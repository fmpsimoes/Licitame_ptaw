<?php 
    // connect to database
    $host = 'localhost';
    $port = '5432';
    $dbname = 'ptaw-2023-gr1';
    $user = 'ptaw-2023-gr1';
    $password = 'ptaw-2023-gr1';

    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");
        //$pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;",$user,$password);

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = "SELECT nome FROM categorias ORDER BY nome ASC";

        $statement = $pdo->prepare( $query );
        $statement->execute( );

        $row = $statement->fetchAll(PDO::FETCH_ASSOC);
        // Se existirem resultados
        if($row){
            // Fecha a conexão
            $statement=null;
            $pdo = null;
            echo json_encode($row);
           
        }else{
            echo json_encode(array("ErrorMessage" => "Não existem categorias!"));
        }

    }catch(PDOException $e) {
       echo "Erro: " . $e->getMessage();
    }
    
?>
 