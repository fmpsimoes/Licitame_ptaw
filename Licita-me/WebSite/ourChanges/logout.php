<?php
session_start();
if(isset($_POST['logout'])) {
    session_destroy(); // destroy session
    header("Location: login.php"); // redirect to login page after logout
}
?>