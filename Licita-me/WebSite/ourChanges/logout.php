<?php
session_start();
if(isset($_POST['logout'])) {
    session_destroy(); // destroy session
}
?>