var onloadCallback = function() {
    const CAPTCHA_SITE_KEY = '6Lcn26UZAAAAADPc1f_tvDJC4RXGqDJtMXNQHPCo'

    grecaptcha.render('captcha', {
        'sitekey' : CAPTCHA_SITE_KEY,
        'theme': 'dark'
    });
};

$(document).ready(function() {
    $("#about").load('content/text_files/about_page.txt');

    $('.nav-button').click(function () {

        var target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top - 120
        }, 1000);
        return false;
    });

    $("form").submit(function(event) {
        event.preventDefault();
        if (grecaptcha.getResponse() === "") {
            $('#missing-captcha').html('Please check \"I\'m not a robot\" box: ');
        }

        let formData = document.getElementsByClassName("form-control");
        let data = {}

        for (var field of formData) {
            data[field.name] = field.value
        }

        $.ajax({
            url: '/send_email',
            type: 'POST',
            data: data
        })

        //TODO remove form after fullfiling it and remove the alert below if done so
        alert('Message sent, thank you! I will reach back to you as soon as possible')
    });
});