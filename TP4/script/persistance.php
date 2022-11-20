<?php
$sourceJson = file_get_contents('../data/source.json');
$data = json_decode($sourceJson, true);

echo $data;

// Pour modifier les données 
$data[0]['propriete'] = "valeur";

// pour sauvegarder de nouveau dans le source.json
$newData = json_encode($data);
file_put_contents('../data/source.json', $newData);
