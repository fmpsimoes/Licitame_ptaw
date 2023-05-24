<?php 
session_start();
$email = $_SESSION;
$host = 'localhost';
$port = '5433';
$dbname = 'ptaw-2023-gr1';
$user = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';
    try{
      $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo json_encode($email);
    }catch (PDOException $e) {
      echo 'Connection failed: ' . $e->getMessage();
      exit;
    }
    
?>