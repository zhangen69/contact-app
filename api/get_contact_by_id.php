<?php
    header("Access-Control-Allow-Origin: *");

    require_once '../configs/connection.php';

    $data = array();

    $query = 'SELECT * FROM contacts WHERE Id=:id';
    $stmt = $conn -> prepare($query);
    $stmt -> bindParam(':id', $_GET['id']);
    $stmt -> execute();

    $data = $stmt -> fetch(PDO::FETCH_ASSOC);

    echo json_encode($data);
?>