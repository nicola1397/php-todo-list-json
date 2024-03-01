<?php

$text = $_POST["title"];
$object = [
    "text" => $text,
    "done" => false
];

$json_list = file_get_contents("../data/list.json");
$list_array = json_decode($json_list);

$list_array[] = $object;

$json_result = json_encode($list_array);

file_put_contents("../data/list.json", $json_result);

header('Content-Type: application/json');

echo $json_result;