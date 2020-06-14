var captchaCallback = function() {

}

var onloadCallback = function() {
    grecaptcha.render('captcha', {
        'sitekey' : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
        'callback' : captchaCallback,
        'theme': 'dark'
    });
};

$(document).ready(function() {
    $("#about").load('content/text_files/about_page.txt');

    $('.nav-button').click(function () {
        var target = $(this.hash);
        target = target.length ? target : $('[name' + this.hash.slice(1) + ']');
        console.log(target)
        $('html, body').animate({
            scrollTop: target.offset().top - 120
        }, 1000);
        return false;
    });

    $("form").submit(function(event) {
        if (grecaptcha.getResponse() === "") {
            event.preventDefault();
            $('#missing-captcha').html('Please check \"I\'m not a robot\" box: ');
        } else {
            $('#missing-captcha').html('');
        }
    });
});