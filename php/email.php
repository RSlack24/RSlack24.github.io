<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email recipient (replace with your email address)
    $to = "eks83@georgetown.edu";

    // Email subject
    $subject = "Contact Form Submission from $name";

    // Email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo "Thank you for your message, $name! We will get back to you shortly.";
    } else {
        // Email sending failed
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Handle invalid form submissions
    echo "Invalid request.";
}
?>

