<?php

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$idLeilao = isset($_GET['idLeilao']) ? $_GET['idLeilao'] : '';
$host = 'localhost';
$port = '5432';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';
$num_bids = 0;
$pdo = null;

function sendEvent($event, $data) {
    echo "event: $event\n";
    echo "data: $data\n\n";
    while (ob_get_level() > 0) {
        ob_end_flush();
    }
    flush();
}

function connectToDatabase() {
    global $host, $port, $dbname, $userbd, $password;
    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (Exception $e) {
        sendEvent('error', "Erro na conexão à BD: " . $e->getMessage());
        exit();
    }
}

function getNumBids($idLeilao) {
    global $pdo;
    try {
        $q = "SELECT count(*) FROM licitacoes WHERE pecaarte = :idLeilao;";
        $statement = $pdo->prepare($q);
        $statement->bindParam(':idLeilao', $idLeilao);
        $statement->execute();
        $num=$statement->fetchColumn();
        if($num==0){
            sendEvent('error',$num);
        }
        return $num;
    } catch (Exception $e) {
        sendEvent('error', "Erro na consulta à BD: " . $e->getMessage());
        exit();
    }
}

function getLicitacoes($idLeilao) {
    global $pdo;
    try {
        $q = "SELECT licitacoes.datalicitacao, licitacoes.valorlicitacao, utilizadores.email, utilizadores.nome, utilizadores.apelido 
                FROM licitacoes 
                INNER JOIN utilizadores ON licitacoes.licitador = utilizadores.email 
                WHERE licitacoes.pecaarte = :idLeilao
                ORDER BY licitacoes.datalicitacao ASC;";

        $statement = $pdo->prepare($q);
        $statement->bindParam(':idLeilao', $idLeilao);
        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    } catch (Exception $e) {
        sendEvent('error', "Erro na consulta à BD: " . $e->getMessage());
        exit();
    }
}

$pdo = connectToDatabase();

while (1) {
    $num_bids_bd = getNumBids($idLeilao);
    if ($num_bids != $num_bids_bd) {
        $licitacoes = getLicitacoes($idLeilao);
        $num_bids = $num_bids_bd;

        sendEvent('licitacoes', json_encode($licitacoes));
    }

    if (connection_aborted())
        break;

    sleep(1);
}

/*
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
//session_start();
$idLeilao = isset($_GET['idLeilao']) ? $_GET['idLeilao'] : '';
$host = 'localhost';
$port = '5432';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';
$num_bids = 0;
$pdo;
while (1) { // repeat the while loop forever (event-loop)
    $num_bids_bd;
    echo "licitacoes: $idLeilao\n\n";
    while (ob_get_level() > 0) {
        ob_end_flush();
    }
    flush();/*
    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $q = "SELECT count(*) FROM licitacoes WHERE pecaarte = :idLeilao;";
        $statement = $pdo->prepare($q);
        $statement->bindParam(':idLeilao', $idLeilao);
        $statement->execute();

        $num_bids_bd = $statement->fetchColumn();
        
    } catch(Exception $e) {
        echo "data: Erro na conexão à BD: " . $e->getMessage() . "\n\n";
        while (ob_get_level() > 0) {
            ob_end_flush();
        }
        flush();
    }

    if ($num_bids != $num_bids_bd) {
        $q2 = "SELECT licitacoes.datalicitacao, licitacoes.valorlicitacao, utilizadores.nome, utilizadores.apelido 
                FROM licitacoes 
                INNER JOIN utilizadores ON licitacoes.licitador = utilizadores.email 
                WHERE licitacoes.pecaarte = :idLeilao
                ORDER BY licitacoes.datalicitacao DESC;";

        $statement2 = $pdo->prepare($q2);
        $statement2->bindParam(':idLeilao', $idLeilao);
        $statement2->execute();

        $licitacoes = $statement2->fetchAll(PDO::FETCH_ASSOC);
        $num_bids = $num_bids_bd;

        echo "licitacoes: " . json_encode($licitacoes) . "\n\n";
        while (ob_get_level() > 0) {
            ob_end_flush();
        }
        flush();
    }

    // break the loop if the client aborted the connection (closed the page)
    if (connection_aborted())
        break;

    // sleep for 1 second before running the loop again
    sleep(1);
}*/
?>
