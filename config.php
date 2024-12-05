<?php

$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'saep';

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn -> connect_error) {

    die("Parece que houve um erro ao conectar o banco de dados :(");
}

else {
    echo " <p style='class: hidden'; Conectado ao banco de dados com sucesso! </p>";
}

?>