/*Header component*/
function headerNav() {
    var topnav = $('header .top-nav-wrap .top-nav li').slice(0, 3),
        menuDropdown = $('header .navbar-default .navbar-collapse .navbar-nav');

    $(menuDropdown).append(topnav);
}

function hoverAdd() {
    if ($(window).width() > 767) {
        $(this).addClass('open');
        $(this).find('.dropdown-menu').show();
    }
}

function hoverRemove() {
    if ($(window).width() > 767) {
        $(this).removeClass('open');
        $(this).find('.dropdown-menu').hide();
    }
}

function tabhover() {
    $('header li.dropdown > a').on("touchstart", function(e) {
        if ($(window).width() > 767) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                return true;
            } else {
                $('header li.dropdown').removeClass('open');
                link.addClass("hover").parent().addClass("open");

                $('header li.dropdown > a').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        }
    });
}



// READY FUNCTION
$(document).ready(function() {
// GLOBAL VARIABLES
var widownWidth = $(window).width(),
    headerList = $('#navigation ul > li.dropdown');

    // tabhover();

    //mobile device
    if (widownWidth < 767) {
        headerNav();
    } else {
        // hoverDropdown();
    }

    $(headerList).on('mouseenter', hoverAdd);
    $(headerList).on('mouseleave', hoverRemove);
});