<?php
    header("Access-Control-Allow-Origin: *");

    require_once '../configs/connection.php';

    $data = array();

    $query = 'SELECT * FROM contacts';
    $stmt = $conn -> prepare($query);
    $stmt -> execute();

    $data = $stmt -> fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
?>