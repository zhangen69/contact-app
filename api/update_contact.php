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
            $formData['Id'] = (int)$postdata -> id;
            $formData['FirstName'] = text_input($postdata -> firstName);
            $formData['LastName'] = text_input($postdata -> lastName);
            $formData['Company'] = text_input($postdata -> company);
            $formData['Email'] = text_input($postdata -> email);
            $formData['Phone'] = text_input($postdata -> phone);
            $formData['JobTitle'] = text_input($postdata -> jobTitle);
            $formData['Remarks'] = text_input($postdata -> remarks);
            // $formData['UpdatedDate'] = date('m/d/Y h:i:s a');

            $query = 'UPDATE contacts SET FirstName=:FirstName, LastName=:LastName, Company=:Company, JobTitle=:JobTitle, Remarks=:Remarks, Phone=:Phone, Email=:Email WHERE Id=:Id';
            $stmt = $conn -> prepare($query);

            $stmt -> bindValue(':Id', $formData['Id']);
            $stmt -> bindValue(':FirstName', $formData['FirstName']);
            $stmt -> bindValue(':LastName', $formData['LastName']);
            $stmt -> bindValue(':Company', $formData['Company']);
            $stmt -> bindValue(':Email', $formData['Email']);
            $stmt -> bindValue(':Phone', $formData['Phone']);
            $stmt -> bindValue(':JobTitle', $formData['JobTitle']);
            $stmt -> bindValue(':Remarks', $formData['Remarks']);
            // $stmt -> bindValue(':UpdatedDate', $formData['UpdatedDate']);

            $stmt -> execute($formData);

        } catch (PDOException $exception)
        {
            print "Error!: " . $exception -> getMessage() . "<br/>";
            die();
        } finally
        {
            // echo json_encode($formData);
            $data['succeeded'] = true;
        }
    } else
    {
        $data['succeeded'] = false;
        $data['error_message'] = 'Submit value is false';
        // $data['data'] = json_encode($_POST);
    }    
    
    echo json_encode($data);

?>