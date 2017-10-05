/*Header component*/
function headerNav() {
    var topnav = $('header .top-nav-wrap .top-nav li').slice(0, 3),
        menuDropdown = $('header .navbar-default .navbar-collapse .navbar-nav');
    $(menuDropdown).append(topnav);
}

// GLOBAL VARIABLES
var widownWidth = $(window).width();

// READY FUNCTION
$(document).ready(function() {

    //mobile device
    if (widownWidth < 767) {
        headerNav();
    }
});