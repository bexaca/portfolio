<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];



$email_from = "$visitor_email";//<== update the email address
$email_subject = "Portfolio";
$email_body = "$message \n\n $name";
    
$to = "aleksandarberonja6@gmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you-page.html');
