<?php
    header("Access-Control-Allow-Origin: *");

    require_once '../configs/connection.php';

    $data = array();

    if (!!isset($_POST['submit']))
    {
        $formData = [];
        
        try
        {
            $formData['FirstName'] = text_input($_POST['firstName']);
            $formData['LastName'] = text_input($_POST['lastName']);
            $formData['Company'] = text_input($_POST['company']);
            $formData['JobTitle'] = text_input($_POST['jobTitle']);
            $formData['Remarks'] = text_input($_POST['remarks']);

            $insert_query = 'INSERT INTO contacts SET FirstName=:FirstName, LastName=:LastName, Company=:Company, JobTitle=:JobTitle, Remarks=:Remarks';
            $stmt= $conn -> prepare($insert_query);

        } catch (PDOException $exception)
        {
            print "Error!: " . $exception -> getMessage() . "<br/>";
            die();
        } finally
        {
            $data['succeeded'] = $stmt -> execute($formData);
        }
    } else
    {
        $data['succeeded'] = false;
        $data['error_message'] = 'Incorrect input.';
    }    

    echo json_encode($data);
?>