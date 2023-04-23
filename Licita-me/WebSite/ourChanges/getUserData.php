<?php 

$servername = "";
$username = "";
$password = "";
if (isset($_POST['autoFilling'])) {
    try{
      $pdo = new PDO("mysql:host=$servername;dbname=ptw", $username, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch (PDOException $e) {
      echo 'Connection failed: ' . $e->getMessage();
      exit;
    }
    try{
      $query = "SELECT nome, apelido, contacto, email, morada, cidade, freguesia, codPostal, pais FROM Utilizadores WHERE email = ? AND password = ?";

      $statement = $pdo->prepare( $query );

      if($statement->execute( array($email, $password) ) ){
        $row = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($row);

      }else{
        echo "Erro ao carregar os dados pessoais";
    }
   }catch(PDOException $e) {
    echo "Erro: " . $e->getMessage();
    }
}
?>