<?php

$elasticServer = "http://master:9200";
$keywords = $_GET["keywords"];

header('Content-type: application/json');
// $result = file_get_contents($elasticServer."/wiki/pages/_search?q=title:\"".$keywords."\"");
$result = file_get_contents($elasticServer."/wiki/pages/_search?".http_build_query(array('q' => $keywords)));
$result = json_decode($result ,true);
echo json_encode($result["hits"]);



?>