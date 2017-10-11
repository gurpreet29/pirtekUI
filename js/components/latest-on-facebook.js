/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.latestfacebook = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // What does the function do
            followUSFB = function() {
                if($(window).width() > 767){
                    $('.latest-facebook .carousel .item').each(function () {
                        var next = $(this).next();
                        if (!next.length) {
                            next = $(this).siblings(':first');
                        }
                        next.children(':first-child').clone().appendTo($(this));
                    });

                } 
            },

            // insert nav after carousel in mobile 
            reOrderNavPager = function(){
                if($(window).width() < 768){
                    $('.latest-facebook nav').insertAfter('.latest-facebook .carousel')
                }else{
                    $('.latest-facebook nav').insertAfter('.latest-facebook .summary')
                }
            }, 


            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.latest-facebook .carousel .item';
                        this.carousel = this.container + ' ' + (args.carousel || '.carousel');
                    }
                };

                // On document ready
                model.init();
                followUSFB();
                reOrderNavPager();
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
        if ($('.latest-facebook').length) {
            var latesttrend = new app.latestfacebook();
            latesttrend.init({
                container: '.latest-facebook'
            });
        }
    });

})(jQuery);