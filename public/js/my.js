$(document).ready(function() {
    let menu_height = 100

    $("#new_value").load('content/about_page.txt');

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            let hash = this.hash;
            let anchor = ($(hash).offset().top - menu_height)

            $('html, body').animate({
                scrollTop: anchor
            }, 400, function(){
                window.location.hash = hash;
            });
        } // End if
    });
});