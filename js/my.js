$(document).ready(function() {
    $("#new_value").load('content/about_page.txt');

    $('.nav-button').click(function () {
        var target = $(this.hash);
        target = target.length ? target : $('[name' + this.hash.slice(1) + ']');
        console.log(target)
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    });
});