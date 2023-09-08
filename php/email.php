<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "eks83@georgetown.edu";
    $subject = "$name is reaching out via your resume website";
    $headers = "From: $email";
    
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$message";
    
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>
