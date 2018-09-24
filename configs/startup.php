<?php

    function text_input ($value)
    {
        if (!isset($value))
        {
            throw new InvalidArgumentException('value cannot be empty');
        }
        else
        {
            try
            {
                $value = trim($value);
                $value = stripcslashes($value);
                $value = htmlspecialchars($value);
            } catch (PDOException $e)
            {
                print "Error!: " . $e -> getMessage() . "<br/>";
                die();
            } finally
            {
                return $value;
            }
        }   
    }
?>