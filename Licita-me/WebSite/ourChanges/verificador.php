<?php

function generateRandomPassword($length = 4) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $newPassword = '';
    $charactersLength = strlen($characters);
    for ($i = 0; $i < $length; $i++) {
        $newPassword .= $characters[rand(0, $charactersLength - 1)];
    }
    return $newPassword;
}

// connect to database
$host = 'localhost';
$port = '5433';
$dbname = 'ptaw-2023-gr1';
$user = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");

    // Get the email from the AJAX request
    $email = $_POST['email'];

    // Check if email exists in the database
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM utilizadores WHERE email = ?");
    $stmt->execute([$email]);
    $count = $stmt->fetchColumn();

    if($count > 0){
        $forgotNewPassword = generateRandomPassword();
        //$response = array("exists" => ($count > 0));
        //echo json_encode($response);

        // Update password in the database
        $stmt = $pdo->prepare("UPDATE utilizadores SET pass = ? WHERE email = ?");
        $stmt->execute([$forgotNewPassword, $email]);

        $response = array("success" => true, "message" => "Senha alterada com sucesso!");
        echo json_encode($response);
        include './emails/recuperacaoPass.php';

        //$response = array("newPassword" => generateRandomPassword());
        //echo json_encode($response);
    }else{
        $response = array("success" => false, "message" => "Email não encontrado.");
        echo json_encode($response);
    }

} catch(PDOException $e) {
    echo json_encode("Erro: " . $e->getMessage());
}
?>
