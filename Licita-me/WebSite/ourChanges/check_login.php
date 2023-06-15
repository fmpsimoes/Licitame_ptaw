<?php
session_start();
if(isset($_SESSION['email'])){
    echo json_encode(array('email' => $_SESSION['email'], 'loggedIn' => true));
}
else{
    echo json_encode(array('email' => '', 'loggedIn' => false));
}
?>
