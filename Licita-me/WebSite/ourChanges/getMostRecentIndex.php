<?php 
    // connect to database
    $host = 'localhost';
    $port = '5433';
    $dbname = 'ptaw-2023-gr1';
    $user = 'ptaw-2023-gr1';
    $password = 'ptaw-2023-gr1';


    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = "SELECT pecasarte.id, pecasarte.titulo, pecasarte.datafim, fotografias.dirimagem, COALESCE(licitacoes.valorlicitacao, pecasarte.valorapreciacaoprecobase) AS precoAtual
                    FROM pecasarte
                        INNER JOIN (
                            SELECT idpecaarte, dirimagem,
                            ROW_NUMBER() OVER (PARTITION BY idpecaarte ORDER BY dirimagem) AS rn
                            FROM fotografias
                        ) fotografias ON pecasarte.id = fotografias.idpecaarte AND fotografias.rn = 1
                        LEFT JOIN (
                            SELECT pecaarte, valorlicitacao
                            FROM licitacoes
                            ORDER BY valorlicitacao DESC
                            LIMIT 1
                        ) licitacoes ON pecasarte.id = licitacoes.pecaarte
                    WHERE pecasarte.estado = 'Ativo'
                    ORDER BY ABS(EXTRACT(EPOCH FROM AGE(pecasarte.datainicio, CURRENT_DATE))) DESC
                    LIMIT 4;";

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
            echo json_encode(array("ErrorMessage" => "Não existem leilões a decorrer!"));
        }

    }catch(PDOException $e) {
       echo "Erro: " . $e->getMessage();
    }
    
?>
 