/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.videosec = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // What does the function do
            mediaCarousel = function() {
                if ($(window).width() > 767) {
                    
                    $(model.carouselItem).each(function() {
                        var next = $(this).next();
                        if (!next.length) {
                            next = $(this).siblings(':first');
                        }
                        next.children(':first-child').clone().appendTo($(this));

                        if (next.next().length > 0) {
                            next.next().children(':first-child').clone().appendTo($(this));
                        } else {
                            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
                        }
                    });
                }
            },

            playVideo = function() {
                $('.video-icon').click(function(ev) {
                    $(this).parents('.video-container').find('.video-image').hide();
                    $(this).parents('.video-container').find('.video-file').show();
                    $(this).parent('.video-image').siblings('.video-file').find("iframe")[0].src += "?&autoplay=1";
                    $(this).parents('.carousel').carousel('pause');
                    ev.preventDefault();
                });
            },

            stopVideo = function() {
                $(model.carousel).on('slid.bs.carousel', function() {
                    var videoContainer = $('.video-container');
                    videoContainer.each(function() {
                        var src = $(this).find('iframe').attr('src');
                        var finalSrc = src.split('&autoplay=1');
                        $(this).find('iframe')[0].src = finalSrc;
                    });
                });
            },


            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.videosec';
                        this.carousel = this.container + ' ' + (args.carousel || '.carousel');
                        this.carouselItem = this.container + ' ' + (args.carouselItem || '.carousel .item');
                    }
                };

                // On document ready
                model.init();
                mediaCarousel();
                playVideo();
                stopVideo();
                $(window).resize(function(event) {
                    /* Act on the event */

                });

            },

            reset = function() {

            };

        // Return public functions only
        return {
            init: init,
            reset: reset
        };
    };



    /*********************************************************************************/
    /*****   ON DOCUMENT LOAD                                            ************/
    /*******************************************************************************/

    $(function() {
        if ($('.videosec').length) {
            var newVideoSec = new app.videosec();
            newVideoSec.init({
                container: '.videosec'
            });
        }
    });

})(jQuery);