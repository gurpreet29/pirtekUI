/* COMPONENT - Example 1.0 */
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
                $(model.container).swipe({

                    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

                        if (direction == 'left') $(this).carousel('next');
                        if (direction == 'right') $(this).carousel('prev');

                    },
                    allowPageScroll: "vertical"
                    //,// options: {
                    //     //exluded element list, less <a>
                    //     excludedElements: "button, input, select, textarea, .noSwipe",
                    //     //trigger <a> on tap
                    //     tap: function(event, target) {
                    //         $(target).parent().trigger('click');
                    //     }
                    // }
                });
            },

            // What does the function do
            anotherFunctionName = function() {
                var _this = this;
                //Do something
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
                picturefill();

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