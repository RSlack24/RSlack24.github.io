$(document).ready(function () {
    // Your existing code
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $window.on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            "linear"
        );
    });

    $("#resume").click(function (e) {
        e.preventDefault();
        window.location.href = "documents/Ryn_Slack_Resume.pdf";
    });

    // Contact form code
    $('#contactForm').submit(function (event) {
        event.preventDefault();

        const name = $('input[name="name"]').val();
        const email = $('input[name="email"]').val();
        const message = $('textarea[name="message"]').val();

        // Basic email validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Send data to the PHP script hosted on a server
        $.ajax({
            type: 'POST',
            url: 'https://your-server.com/your-php-script.php', // Replace with your server's URL
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function (response) {
                alert(response); // Display the server's response
                $('#contactForm')[0].reset(); // Clear the form
            },
            error: function () {
                alert("Oops! Something went wrong. Please try again later.");
            }
        });
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


});

