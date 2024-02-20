<?php

require_once("./forms.php");
$firstName =  $_POST["firstName"]; 
$lastName = $_POST["lastName"];

setcookie('name', $firstName . ' ' . $lastName, time() + 60);


file_put_contents("data.txt", $firsname . ' ' . $lastName . PHP_EOL, FILE_APPEND);
header("Location: ./forms.php?success");
?>