/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.carousel = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // What does the function do
            attachCarousel = function() {

                $(model.container).swiperight(function() {
                    $(this).carousel('prev');
                });

                $(model.container).swipeleft(function() {
                    $(this).carousel('next');
                });
            },



            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.carousel';
                    }
                };

                // On document ready
                model.init();
                attachCarousel();

                $('a[data-slide="prev"]').click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    $('#myCarousel').carousel('prev');
                    console.log('$(#myCarousel).carousel(prev);');

                });

                $('a[data-slide="next"]').click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $('#myCarousel').carousel('next');
                    console.log('$(#myCarousel).carousel(next);');
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
        if ($('.carousel').length) {
            var newCarousel = new app.carousel();
            newCarousel.init({
                container: '.carousel'
            });
        }
    });

})(jQuery);