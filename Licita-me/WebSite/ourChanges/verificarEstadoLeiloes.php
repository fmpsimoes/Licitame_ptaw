<?php
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/SMTP.php';

$host = 'localhost';
$port = '5433';
$dbname = 'ptaw-2023-gr1';
$user = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

$timestamp_now = $pdo->query("SELECT LOCALTIMESTAMP(0)")->fetchColumn();

// Situacao mudar o estado de 'Aprovado' para 'Ativo'
$aprovadoStmt = $pdo->prepare("UPDATE pecasarte SET estado = 'Ativo' WHERE id = :id");
$selectAprovadoStmt = $pdo->query("SELECT * FROM pecasarte WHERE estado = 'Aprovado' ORDER BY datainicio ASC");

while ($row = $selectAprovadoStmt->fetch(PDO::FETCH_ASSOC)) {

    if ($timestamp_now >= $row['datainicio']) {
        $aprovadoStmt->execute(['id' => $row['id']]);

        include './emails/emailAtivoVendedor.php'; //email para vendedor
    } else {
        break;
    }
}


$ativoStmt = $pdo->prepare("UPDATE pecasarte SET estado = :estado, emailcomprador = :emailcomprador WHERE id = :id");
$selectAtivoStmt = $pdo->query("SELECT * FROM pecasarte WHERE estado = 'Ativo' ORDER BY datafim ASC");

while ($row = $selectAtivoStmt->fetch(PDO::FETCH_ASSOC)) {

    if ($timestamp_now >= $row['datafim']) {
        // Obter informacao da licitacao vencedora
        $licitacoesStmt = $pdo->prepare("SELECT licitador, pecaarte, valorlicitacao FROM licitacoes WHERE pecaarte = :pecaarte ORDER BY valorlicitacao DESC LIMIT 1");
        $licitacoesStmt->execute(['pecaarte' => $row['id']]);

        if ($rowBid = $licitacoesStmt->fetch(PDO::FETCH_ASSOC)) {
            // Situacao mudar o estado de 'Ativo' para 'Vendido'
            $ativoStmt->execute(['estado' => 'Vendido', 'id' => $rowBid['pecaarte'], 'emailcomprador' => $rowBid['licitador']]);

            include './emails/emailVendidoVendedor.php'; //email para vendedor
            include './emails/emailVendidoComprador.php'; //email para comprador

            // Obter informacoes do comprador
            $winnerStmt = $pdo->prepare("SELECT * FROM utilizadores WHERE email = :licitador");
            $winnerStmt->execute(['licitador' => $rowBid['licitador']]);
            $rowWinner = $winnerStmt->fetch(PDO::FETCH_ASSOC);

            include './emails/emailTransporteArmazemParaComprador.php'; //email para transportadora levar a peca para o comprador
        } else { //Se nao houverem licitacoes
            // Situacao mudar o estado de 'Ativo' para 'Expirado'
            $ativoStmt->execute(['estado' => 'Expirado', 'id' => $row['id'], 'emailcomprador' => null]);

            include './emails/emailExpiradoVendedor.php'; //email para vendedor

            // Obter informacoes do vendedor
            $sellerStmt = $pdo->prepare("SELECT * FROM utilizadores WHERE email = :vendedor");
            $sellerStmt->execute(['vendedor' => $row['emailvendedor']]);
            $rowSeller = $sellerStmt->fetch(PDO::FETCH_ASSOC);

            include './emails/emailExpiradoArmazemParaVendedor.php'; //email para transportadora levar a peca de volta para o vendedor
        }
    } else {
        break;
    }
}
