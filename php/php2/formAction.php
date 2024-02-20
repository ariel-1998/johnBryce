<?php

$fr = new stdClass();
$fr->first = $_POST["first"];
$fr->last = $_POST["last"];
$fr->mail = $_POST["mail"];

require_once("./index.php");
$arr[] = $fr
// header("Location: ./index.php");

?>