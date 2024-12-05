<?php

include "config.php";

if (!$conn){ 
    die("Falha na conexão" . mysqli_connect_error());
}

$email = "$_POST[email]";
$senha = "$_POST[senha]";

$sql = mysqli_query($conn, "SELECT * FROM usuario WHERE email = '$email' AND senha = '$senha'") or die("parece que houve um erro :(");	

	if (mysqli_num_rows($sql)<=0){
		echo "<script language='javascript' type='text/javascript'>
        alert('Login e/ou senha incorretos');window.location
        .href='index.php';</script>";
        die();	
	}

	else {
		setcookie("email", $email);
		header("Location: teste.html");
	}

	
?>