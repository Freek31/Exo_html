<?php
header("Access-Control-Allow-Origin: *");
$ville = $_GET['ville'];
$json = file_get_contents($ville.'.json');
echo $json;
?>