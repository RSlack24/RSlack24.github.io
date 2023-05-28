$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $window.on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    })
});

$(document).ready(function () {
    $("#resume").click(function (e) {
        e.preventDefault();
        window.location.href = "documents/sample.txt";
    });
});