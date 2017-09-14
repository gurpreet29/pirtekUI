$(document).ready(function() {
    "use strict";
    
    //for disclaimer plus minus icons
    $('.disclaimers .collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".glyphicon-plus-sign").removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".glyphicon-minus-sign").removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
    });
    
    //for toggle hamburger menu 
    $('.navbar-default button').click(function () {
        $('#finance-navbar-collapse').removeClass('in');
    });

    $('.navbar-inverse button').click(function () {
        $('#toyota-main-navigation').removeClass('in');
    });

    // faq tab active
    $('.contact ul li a').click(function(){
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
        $('.contact ul li').removeClass('active');
        $(this).addClass('active');
    });
    
    //for read less
    $(".Wel-text a").click(function() {
        $(this).parents('.Wel-text').toggleClass('auto');
        return false;
    });

    // for dropdown on rollover
    $('.global-nav li.dropdown').not('.global-nav li.dropdown:last').hover(function() {
        if( $(window).width() > 767 ) {
            $(this).addClass('open');
            $(this).find('.dropdown-menu').show();
        } else {
           
        }
    }, function() {
        $(this).removeClass('open');
        $(this).find('.dropdown-menu').hide();
    });

    /*for mobile
    $('.global-nav li.dropdown').on('click', function() {
        if( $(window).width() < 768 ){
            var $el = $(this);
            if ($el.hasClass('open')) {
                var $a = $el.children('a.dropdown-toggle');
                if ($a.length && $a.attr('href')) {
                    location.href = $a.attr('href');
                }
            }
        }
    });*/

    if( $(window).width() < 768 ) { 
        $(".global-nav li.dropdown").click(function() { 
            $(this).addClass('open');
            $(this).find('.dropdown-menu').show();
        });

        $(".global-nav li.dropdown").dblclick(function() {
            var $el = $(this);
            if ($el.hasClass('open')) {
                var $a = $el.children('a');
                if ($a.length && $a.attr('href')) {
                    location.href = $a.attr('href');
                }
            }
        });
    }

    var socailImages = "<a href='' title='facebook'><img src='images/facebook.jpg' alt='facebook'></a> <a href='' title='twitter'><img src='images/twitter.jpg' alt='twitter'></a> <a href='' title='linkedin'><img src='images/linked-in.jpg' alt='linkedin'></a>";

    $('#popover-social').popover({
        placement: 'left', 
        content: socailImages, 
        html: true
    });

    app.init();    
});

var app = {
    init: function() {
        this.initPageElements();
        this.defineSearchPanel();
        this.definePropositionheight();
        this.defineValueheight();
        this.defineBorderBoxContant();
        this.defineDownloadBoxes();
        app.affixNav.init();
        if ( $('.featured-container').length ) {
            app.Carousel.initialize();
            app.Carousel.swipeBoxes();
        }

        if( $('.nl-calculator-page').length ) {
            this.nlCalculator.init();
        }

        //tooltip on calculator page
        $('[data-toggle="tooltip"]').tooltip();
    },

    initPageElements: function() {
        $('.openModalVideo').click(this.playModalVideo);
        $('.closeModalVideo').click(this.closeModalVideo);
        $('.open-banner-video').click(this.playBannerVideo);
        $('.close-banner-video').click(this.closeBannerVideo);
        $('.open-video').click(this.openVideo);
        $('.closeVideo').click(this.closeVideo);
        $('footer h3').click(this.toogleFooterLinks);
        $('.next').click(app.Carousel.nextSlide);
        $('.prev').click(app.Carousel.prevSlide);
        $('.gallery-items-pane .video').click(this.embedNewsVideo);
        $('.close-player-pane').click(this.closePlayerPane);
        $('#columnToggle').on('change', this.columnToggle);
    },

    defineSearchPanel: function() {
        var windowWidth = $(window).width();
        if( windowWidth < 1020 ) {
            $('#global-search .search').css( { 'min-width': windowWidth - 15 } );
        } else {
            $('#global-search .search').css( { 'min-width': '1020px' } );
        }
    },

    defineBannerHeight: function() {
        //resizing height
        $("#toyota-novated-banner .item").css({'min-height': 0});

        //defining height
        var max=0;
        $("#toyota-novated-banner .item").each(function() {
            var h = $(this).height();
                max = h > max ? h : max;
        });
        $("#toyota-novated-banner .item").css({'min-height': max});
    },

    //primary banner videos for stream 3 and 4
    //hero banners
    playBannerVideo: function(e) {
        var el                  = $(this),
            carouselContainer   = el.parents('.carousel'),
            videoContainer      = el.parents('.video-container'),
            htmlVideo           = videoContainer.find('video'),
            iframeVideo         = videoContainer.find('iframe');

        videoContainer.find('.video-image').hide();
        videoContainer.find('.video-file').show();
        carouselContainer.addClass('videoActive').carousel('pause');

        if(htmlVideo.length) {
            var id = htmlVideo.attr('id'),
                video = document.getElementById(id);

            video.currentTime = 0;          
            video.play();
        } else {
            e.preventDefault();
            var src = videoContainer.find('iframe')[0].src,
                finalSrc = src.split('?');

            videoContainer.find('iframe')[0].src = finalSrc[0]+'?enablejsapi=1&version=3&playerapiid=ytplayer&rel0&autoplay=1&wmode=transparent';
        }
        return false;
    },

    closeBannerVideo: function() {
        var el = $(this),
            videoContainer = el.parents('.video-container'),
            htmlVideo = videoContainer.find('video'),
            iframeVideo = videoContainer.find('iframe');

        videoContainer.find('.video-file').hide();
        videoContainer.find('.video-image').show();
        $(this).parents('.carousel').removeClass('videoActive').carousel('cycle');

        if(htmlVideo.length) {
            var videoId = $(this).siblings('video').attr('id');
            app.stopVideo(videoId);
        } else {
            var src = videoContainer.find('iframe').attr('src');
                finalSrc = src.split('&autoplay=');

            videoContainer.find('iframe')[0].src = finalSrc+'&autoplay=0';
        }
        return false;
    },

    //secondary banner videos
    //bottom banners
    openVideo: function(e) {
        var el                  = $(this),
            bepModule           = el.parents('.bep-module'),
            videoContainer      = bepModule.siblings('.videoContainer'),
            carouselContainer   = el.parents('.carousel'),
            htmlVideo           = videoContainer.find('video'),
            iframeVideo         = videoContainer.find('iframe');

        bepModule.hide();
        videoContainer.show();
        carouselContainer.addClass('videoActive').carousel('pause');

        if(htmlVideo.length) {
            var id = htmlVideo.attr('id'),
                video = document.getElementById(id);

            video.currentTime = 0;          
            video.play();
        } else {
            e.preventDefault();
            var src = videoContainer.find('iframe')[0].src,
                finalSrc = src.split('?');

            videoContainer.find('iframe')[0].src = finalSrc[0]+'?enablejsapi=1&version=3&playerapiid=ytplayer&rel0&autoplay=1&wmode=transparent';
        }
        return false;
    },

    closeVideo: function() {
        var el = $(this),
            videoContainer = el.parents('.videoContainer'),
            htmlVideo = videoContainer.find('video'),
            iframeVideo = videoContainer.find('iframe');

        videoContainer.siblings('.bep-module').show();
        videoContainer.hide();
        $(this).parents('.carousel').removeClass('videoActive').carousel('cycle');

        if(htmlVideo.length) {
            var videoId = $(this).siblings('video').attr('id');
            app.stopVideo(videoId);
        } else {
            //videoContainer.find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            var src = videoContainer.find('iframe').attr('src');
                finalSrc = src.split('&autoplay=');

            videoContainer.find('iframe')[0].src = finalSrc+'&autoplay=0';
        }
        return false;
    },

    stopVideo: function(id) {
        var video = document.getElementById(id); 
        video.pause();
    },

    defineVideoHeight: function() {
        if( $('video').length ) {
            $('video').each(function() {
                if( $(this).parents('#toyota-secondary-banner').length || $(this).parents('.inner-hub-pages').length  ) {
                    $(this).css({'max-height': $(this).parents('.carousel').height() });
                }
            });
        }

        if( $('iframe').length ) {
            $('iframe').each(function() {
                if( $(this).parents('#toyota-secondary-banner').length || $(this).parents('.inner-hub-pages').length  ) {
                    $(this).css({'max-height': $(this).parents('.carousel').height() });
                }
            });
        }
    },

    //modal videos
    playModalVideo: function(e) {
        var modalId = $(this).attr('data-target'),
            modal = $(modalId),
            htmlVideo = modal.find('video'),
            iframeVideo = modal.find('iframe');

        if(htmlVideo.length) {
            var id = htmlVideo.attr('id'),
                video = document.getElementById(id);

            video.currentTime = 0;          
            video.play();
        } else {
            e.preventDefault();
            var src = modal.find('iframe')[0].src,
                finalSrc = src.split('?');

            modal.find('iframe')[0].src = finalSrc[0]+'?enablejsapi=1&version=3&playerapiid=ytplayer&rel0&autoplay=1&wmode=transparent';
        }
    },

    closeModalVideo: function() {
        var modal = $(this).parents('.modal'),
            htmlVideo = modal.find('video'),
            iframeVideo = modal.find('iframe');

        if(htmlVideo.length) {
            var videoId = modal.find('video').attr('id');
            app.stopVideo(videoId);
        } else {
            var src = modal.find('iframe').attr('src');
                finalSrc = src.split('&autoplay=');
            modal.find('iframe')[0].src = finalSrc+'&autoplay=0';
        }
        modal.modal('hide');
    },

    //footer
    toogleFooterLinks: function() {
        var hasRightClass = $(this).find('span').hasClass('glyphicon-triangle-right');

        if( $(window).width() < 768 ) {
            $(this).next('ul').slideToggle();

            if( hasRightClass ) $(this).find('span').removeClass('glyphicon-triangle-right').addClass('glyphicon-triangle-bottom');
            else $(this).find('span').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-right');
        }
    },

    definePropositionheight: function() {
        $(".module-5 .thumbnail, .module-6 .thumbnail").css({'min-height': 0});

        var max = -1;
        $(".module-5 .thumbnail, .module-6 .thumbnail").each(function() {
            var h = $(this).outerHeight(); 
            max = h > max ? h : max;
        });
        $(".module-5 .thumbnail, .module-6 .thumbnail").css({'min-height': max+15});
    },

    defineValueheight: function() {
        $(".module-7 .thumbnail, .module-8 .thumbnail").css({'min-height': 0});

        var max = -1;
        $(".module-7 .thumbnail, .module-8 .thumbnail").each(function() {
            var h = $(this).outerHeight(); 
            max = h > max ? h : max;
        });
        $(".module-7 .thumbnail, .module-8 .thumbnail").css({'min-height': max+15});
    },

    //news and video page
    embedNewsVideo: function() {
        var el = $(this),
            itemPane = el.parent('.gallery-items-pane'),
            videoSrc = el.find('img').attr('data-video-src'),
            iframeSrc = el.find('img').attr('data-iframe-src'),
            playerPane = itemPane.siblings('.gallery-player-pane'),
            video;
 
        if( videoSrc !== undefined ) {
            video = '<video id="video" width="100%" controls autoplay>'+
                       '<source src="video/'+videoSrc+'.mp4" type="video/mp4">'+
                       // '<source src="'+videoSrc+'.webm" type="video/webm">'+
                       // '<source src="'+videoSrc+'.ogg" type="video/ogg">'+
                       '<p>Your browser does not support HTML5 video.</p>'+
                      '</video>';
        } else {
                video = '<iframe width="100%" height="350" src="'+iframeSrc+'?enablejsapi=1&version=3&playerapiid=ytplayer&rel0&autoplay=1" frameborder="0" allowfullscreen></iframe>';
        }

        //closing any opened video
        if( !el.hasClass('active') ){
            $('.gallery-player-pane').each(function() {
        if( $(this).is(':visible') ) {
            $(this).slideToggle();
            $(this).find('.thumbnail').html('');
            $('.gallery-items-pane').find('.video.active').removeClass('active');
        }
        });

        //embeding video into player pane container
            el.addClass('active');
            playerPane.find('.thumbnail').html(video);
            playerPane.find('.thumbnail').append( el.find('.detail-description').html() );
            playerPane.slideToggle();
        }
            return false;
    },

    closePlayerPane: function() {
        var closebtn = $(this),
            player = closebtn.parents('.gallery-player-pane'),
            item = player.siblings('.gallery-items-pane');

            player.slideToggle();
            closebtn.siblings('.thumbnail').html('');
            item.find('.video.active').removeClass('active');
        return false;
    },

    //table toggle columns
    columnToggle: function() {
        var cellClass = $(this).val();

        //hiding all the cells
        $('.cell').addClass('hide-cell');

        //showing selected cells only
        $('tr > td:nth-of-type(1)').removeClass('hide-cell');
        $('.'+cellClass).removeClass('hide-cell');
    },

    initTableColumns: function() {
        if( $(window).width() < 992 ) {
            $('tr').each(function() {
                var count=0;
                $(this).find('.cell').each(function() {
                    if( count > 1 ) {
                        $(this).addClass('hide-cell');
                    }
                    count++;
                });
            });
        } else {
            $('.cell').removeClass('hide-cell');
        }
    },

    //contact page
    defineBorderBoxContant: function() {
        $(".BorderBox-contant").css({'min-height': 0});

        var max = -1;
        $(".BorderBox-contant").each(function() {
            var h = $(this).outerHeight(); 
            max = h > max ? h : max;
        });
        $(".BorderBox-contant").css({'min-height': max});
    },

    defineDownloadBoxes: function() {
        $(".right-content .download").css({'min-height': 0});

        var max = -1;
        $(".right-content .download").each(function() {
            var h = $(this).height(); 
            max = h > max ? h : max;
        });
        $(".right-content .download").css({'min-height': max});
    },
};

$(window).load(function() {
    app.defineVideoHeight();
    app.definePropositionheight();
    app.defineValueheight();
    app.initTableColumns();
    app.defineBorderBoxContant();
    app.defineBannerHeight();
    if ( $('.featured-container').length ) {
        app.Carousel.defineHeight();
    }
});

$(window).resize(function() {
    if ( $('.featured-container').length ) {
        app.Carousel.initialize();
    }

    if( $('.nl-calculator-page').length ) {
        app.nlCalculator.resizeEvents();
    }
    
    app.defineSearchPanel();
    app.defineBannerHeight();
    app.definePropositionheight();
    app.defineValueheight();
    app.initTableColumns();
    app.defineBorderBoxContant();
    app.affixNav.initNavElements();
});

$(window).scroll(function() {
    if( $('.nl-calculator-page').length ) {
        app.nlCalculator.nlAffixDesktopTabs();
    }
    app.affixNav.initNavElements();
});

