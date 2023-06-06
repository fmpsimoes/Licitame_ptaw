<?php
    session_start();
    if(isset($_SESSION['email'])){
        echo "logged";
    }
    else{
        echo "not logged";
    }
?>