<?php
session_start();

$id_certificado = $_POST["id_certificado"];

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
try{
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["certificado"]) && isset($_POST["id_certificado"])) {
        $targetDir = "../certificados/";
        $i=1;
        foreach ($_FILES["certificado"]["tmp_name"] as $index => $tmpName) {
          $filename = $_FILES["certificado"]["name"][$index];
          //$targetPath = $targetDir . basename($filename);
          $targetPath = $targetDir . "certificado_". $id_certificado. "_".$i.".pdf" ;
          if (move_uploaded_file($tmpName, $targetPath)) {
            $uploadedFiles[] = $targetPath;
            $query2 = "UPDATE pecasarte SET dircertificado ='$targetPath' WHERE id = '$id_certificado'";
            $statement2 = $pdo->prepare($query2);
            $statement2->execute();
          }
          $i=$i+1;
        }
        echo json_encode("Leilão Inserido com Imagens");
    }
    else {
        echo json_encode("Imagens não inseridas");
    }
}catch (PDOException $e) {
    echo json_encode("Error inserting new Room into database:" .  $e->getMessage());
    exit;
}

?>