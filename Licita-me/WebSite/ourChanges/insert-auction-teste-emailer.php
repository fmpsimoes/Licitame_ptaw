<?php 
session_start();

$data = $_POST['data'];

include './emails/emailTransporteVendedorParaArmazem.php';


?>