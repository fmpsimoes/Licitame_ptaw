<?php
session_start();

$data = $_POST['data'];
$idLeilao = $data['idLeilao'];
$null = null;
$host = 'localhost';
$port = '5433';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';
$min_bid;
$cur_bid;

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    $q = "SELECT valorlicitacao, licitador
    FROM licitacoes 
    WHERE pecaarte = :idLeilao
    ORDER BY datalicitacao DESC
    LIMIT 1;";

    $statement = $pdo->prepare($q);
    $statement->bindParam(':idLeilao', $idLeilao);
    $statement->execute();

    $bid_bd = $statement->fetchAll(PDO::FETCH_ASSOC);


    $q2 = "SELECT *
    FROM pecasarte 
    WHERE id = :idLeilao;";

    $statement2 = $pdo->prepare($q2);
    $statement2->bindParam(':idLeilao', $idLeilao);
    $statement2->execute();

    $bid_bd2 = $statement2->fetchAll(PDO::FETCH_ASSOC);
    if (empty($bid_bd)) {
        $min_bid = $bid_bd2[0]['valorapreciacaoprecobase'];
        $cur_bid = $bid_bd2[0]['valorapreciacaoprecobase'];
    } else {
        if ($bid_bd2[0]['estado'] == "Vendido" or $bid_bd2[0]['estado'] == "Expirado") {
            $response['message'] = "Leilao invalido";
            echo json_encode($response);
            exit;
        }
        $min_bid = $bid_bd[0]['valorlicitacao'] + $bid_bd2[0]['valorapreciacaoprecobase'] * 0.05;
        $cur_bid = $bid_bd[0]['valorlicitacao'];
    }


    if ($data['tipo'] == "bid") {
        if ($data['valor'] < $min_bid) {
            $response['message'] = "Valor da licitação invalido";
            echo json_encode($response);
            exit;
        }
    } else if ($data['tipo'] == "bidcomprarja") {
        $precojavend = 0;
        if ($bid_bd2[0]['precocomprarja'] != null) {
            $precojavend = $bid_bd2[0]['precocomprarja'];
        }
        $bid_now = max($cur_bid * 1.5, $bid_bd2[0]['valorapreciacaocompraja'], $precojavend);
        if ($data["valor"] != $bid_now) {
            $response['message'] = "Valor da licitação invalido";
            echo json_encode($response);
            exit;
        }

    } else if ($data['tipo'] == "bidauto") {
        $response['message'] = "Por fazer licitação auto php";
        echo json_encode($response);
        exit;
    } else {
        $response['message'] = "Tipo de licitação invalido!";
        echo json_encode($response);
        exit;
    }

    $querybid = "INSERT INTO licitacoes (datalicitacao, valorlicitacao, licitador, pecaarte) 
                values (:datah,:valor,:email,:idLeilao)";
    $statementbid = $pdo->prepare($querybid);
    $statementbid->bindParam(':datah', $data['date']);
    $statementbid->bindParam(':valor', $data['valor']);
    $statementbid->bindParam(':email', $_SESSION['email']);
    $statementbid->bindParam(':idLeilao', $idLeilao);

    if ($statementbid->execute()) {
        if ($data['tipo'] == "bidcomprarja") {
            $queryja = "UPDATE pecasarte SET estado = 'Vendido', emailcomprador = :email WHERE id = :idLeilao;";
            $statementja = $pdo->prepare($queryja);
            $statementja->bindParam(':idLeilao', $idLeilao);
            $statementja->bindParam(':email', $_SESSION['email']);
            if ($statementja->execute()) {
                $row=$bid_bd2;
                $row['emailcomprador']=$_SESSION['email'];
                $rowBid['valorlicitacao']=$data['valor'];
                include './emails/phpMailer.php';
                include './emails/emailVendidoComprador.php';
                include './emails/emailVendidoVendedor.php';
                $rowWinner=$_SESSION;
                include './emails/emailTransporteArmazemComprador.php';
                $response['message'] = "Peca comprada com sucesso";
                echo json_encode($response);
                exit;
            } else {
                $response['message'] = "Erro ao atualizar o estado da peça de arte";
                echo json_encode($response);
                exit;
            }
            
            


        }
        $response['message'] = "Licitacao efectuada com sucesso";
        $response['valor'] = $data['valor'];
        echo json_encode($response);
    } else {
        $response['message'] = "Erro ao inserir licitacao";
        echo json_encode($response);
        exit;
    }
} catch (PDOException $e) {
    $response['message'] = "Connection failed: " + $e->getMessage();
    echo json_encode($response);
    exit;
}

?>