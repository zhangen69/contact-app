<?php
    try {
        $user = 'root';
        $pass = '';
        $dbname = 'contact_app';

        $conn = new PDO('mysql:host=localhost;dbname='.$dbname, $user, $pass);        
    } catch (PDOException $exception) {
        print "Error!: " . $exception -> getMessage() . "<br/>";
        die();
    } finally
    {
        require_once '../configs/startup.php';
    }
?>