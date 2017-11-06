/*Header component*/
function headerNav() {
    var topnav = $('header .top-nav-wrap .top-nav li').slice(0, 3),
        menuDropdown = $('header .navbar-default .navbar-collapse .navbar-nav');

    $(menuDropdown).append(topnav);
}

// Convert svg to src
function svgBg() {
    $("img[src$='.svg']").each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
}


function hoverAdd() {
    if ($(window).width() > 1024) {
        $(this).addClass('open');
        $(">ul", this).show();
    }
}

function hoverRemove() {
    if ($(window).width() > 1024) {
        $(this).removeClass('open');
        $(">ul", this).hide();
    }
}

function showSearchBtn() {
    console.log('sdf');
    $('.search-field').slideToggle();
}

// add background on home page
function homeBg() {
    $('.homepage-bg').parents('body').addClass('homepage-bg');
}

// adjust background position on home page
function homeBgPos() {
    var headerPos = $('header').outerHeight() + $('#myCarousel').outerHeight() + 'px';
    $('.homepage-bg').parents('body').css('background-position', (headerPos, 'center'));
}



// READY FUNCTION
$(document).ready(function() {
    // GLOBAL VARIABLES
    var widownWidth = $(window).width(),
        headerList = $('#navigation ul > li.dropdown');
        

    // $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     $(this).parent().siblings().removeClass('open');
    //     $(this).parent().toggleClass('open');
    // });


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

    //mobile device
    if (widownWidth < 767) {
        headerNav();
    } else {
        // hoverDropdown();
    }

    svgBg();
    homeBg();
    homeBgPos();

    $(headerList).on('mouseenter focus', hoverAdd);
    $(headerList).on('mouseleave blur', hoverRemove);
    $('.search-btn').on('click', showSearchBtn);
});

$(window).resize(function() {
    homeBgPos();
});