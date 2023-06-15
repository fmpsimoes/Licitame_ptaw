<?php
session_start();

$id_leilao = $_POST["id_leilao"];

header('content-type: application/json; charset=utf-8');
$host = 'localhost';
$port = '5432';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';
$uploadedFiles = [];
try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}
try {
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["photos"]) && isset($_POST["id_leilao"])) {
        $targetDir = "../imagens/";
        $i = 1;
        foreach ($_FILES["photos"]["tmp_name"] as $index => $tmpName) {
            $filename = $_FILES["photos"]["name"][$index];
            $extension = pathinfo($filename, PATHINFO_EXTENSION);
            $targetPath = $targetDir . "img_" . $id_leilao . "_" . $i . "." . $extension;
            if (move_uploaded_file($tmpName, $targetPath)) {
                $uploadedFiles[] = $targetPath;
                $query2 = "INSERT INTO fotografias (idpecaarte, dirimagem) VALUES ('$id_leilao' , '$targetPath');";
                $statement2 = $pdo->prepare($query2);
                $statement2->execute();
            }
            $i++;
        }
        echo json_encode("Leilão Inserido com Imagens");
    } else {
        echo json_encode("Imagens não inseridas");
    }
} catch (PDOException $e) {
    echo json_encode("Error inserting new Room into database: " . $e->getMessage());
    exit;
}
?>
