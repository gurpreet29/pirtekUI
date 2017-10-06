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
                if($(window).width() > 767){
                    $('.videosec .carousel .item').each(function () {
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

            playVideo = function(){
                $('.video-icon').click(function(ev) {
                    $(this).parents('.video-container').find('.video-image').hide();
                    $(this).parents('.video-container').find('.video-file').show();
                    $(this).parent('.video-image').siblings('.video-file').find("iframe")[0].src += "?&autoplay=1";
                    $(this).parents('.carousel').carousel('pause');
                    ev.preventDefault();
                });      
                
            },

            stopVideo = function(){
                $('.videosec .carousel').on('slide.bs.carousel', function(){
                    var videoContainer = $('.video-container');
                    videoContainer.each(function(){
                        var src = $(this).find('iframe').attr('src');
                        var finalSrc = src.split('&autoplay=');
                        // if($('iframe')[finalSrc.length -1] == '&autoplay=1'){
                        //     src.replace("&autoplay=1", "&autoplay=0");
                        // }
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