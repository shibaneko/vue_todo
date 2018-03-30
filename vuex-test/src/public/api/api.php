<?php 
const $json = file_get_contents('../json/items.json');
header("Content-Type: application/json; charset=UTF-8");

var_dump(($json));
?>