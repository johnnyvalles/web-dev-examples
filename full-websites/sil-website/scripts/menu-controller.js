$(document).ready(function() {

    // Open menu and change icon to close
    $("#mobile-menu").click(function() {
        $('#mobile-menu').hide();
        $('#menu-close').show();
        $('.main-links').animate({top: '5em'}, 200); 
    });

    // Close menu and change icon to hamburger
    $('section').click(function() {
        $('#menu-close').hide(); 
        $('#mobile-menu').show();
        $('.main-links').animate({top: '-22em'}, 200);
    })

    $("#menu-close").click(function() {
        $('#menu-close').hide(); 
        $('#mobile-menu').show();
        $('.main-links').animate({top: '-22em'}, 200);
    });
}); 