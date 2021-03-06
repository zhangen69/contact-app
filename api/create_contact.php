<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once '../configs/connection.php';

    $data = array();

    $postdata = json_decode(file_get_contents("php://input"));

    if (isset($postdata -> submit))
    {
        $formData = [];
        
        try
        {
            $formData['FirstName'] = text_input($postdata -> firstName);
            $formData['LastName'] = text_input($postdata -> lastName);
            $formData['Company'] = text_input($postdata -> company);
            $formData['Email'] = text_input($postdata -> email);
            $formData['Phone'] = text_input($postdata -> phone);
            $formData['JobTitle'] = text_input($postdata -> jobTitle);
            $formData['Remarks'] = text_input($postdata -> remarks);

            $query = 'INSERT INTO contacts SET FirstName=:FirstName, LastName=:LastName, Company=:Company, JobTitle=:JobTitle, Remarks=:Remarks, Phone=:Phone, Email=:Email';
            $stmt = $conn -> prepare($query);
            $stmt -> execute($formData);

        } catch (PDOException $exception)
        {
            print "Error!: " . $exception -> getMessage() . "<br/>";
            die();
        } finally
        {
            $data['succeeded'] = true;
        }
    } else
    {
        $data['succeeded'] = false;
        $data['error_message'] = 'Submit value is false';
    }    

    echo json_encode($data);
?>