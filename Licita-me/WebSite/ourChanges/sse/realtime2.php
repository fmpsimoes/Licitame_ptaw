<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$num_uti = 0;
$host = 'localhost';
$port = '5432';
$dbname = 'ptaw-2023-gr1';
$userbd = 'ptaw-2023-gr1';
$password = 'ptaw-2023-gr1';
while (1) { // repeat the while loop forever (event-loop)
  $num_uti_bd;

  // Retrieve data from query string
  $value = isset($_GET['value']) ? $_GET['value'] : '';

  try {
    // Establish a PDO connection to the database
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$userbd;password=$password");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create the query to get the user count
    $q = "SELECT count(*) FROM licitacoes";
    $statement2 = $pdo->prepare($q);
    $statement2->execute();

    $num_uti_bd = $statement2->fetchColumn();
  } catch (Exception $e) {
    // Handle the database connection error and send an error message to the client
    echo "data: Erro na conexão à BD: " . $e->getMessage() . "\n\n";
    while (ob_get_level() > 0) {
      ob_end_flush();
    }
    flush();
  }

  // If the number of users in the database has changed, send an update to the client
  if ($num_uti != $num_uti_bd) {
    $num_uti = $num_uti_bd;
    $response_data = $num_uti . ' + ' . $value;
    echo "data: $response_data\n\n";
    while (ob_get_level() > 0) {
      ob_end_flush();
    }
    flush();
  }

  // Break the loop if the client aborted the connection (closed the page)
  if (connection_aborted())
    break;

  // Sleep for 1 second before running the loop again
  sleep(1);
}
?>
