/* COMPONENT - solution-carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.solution = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // check for mobile & removes class for slide to stop slider
            checkViewport = function() {
                if (!$(model.carousel).hasClass('slide')) {
                    $(model.carousel).addClass('slide');
                }

                if ($(window).width() < 768) {
                    $(model.carousel).removeClass('slide');

                }


            },

            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.solution';
                        this.carousel = this.container + ' ' + (args.carousel || '.carousel');


                    }
                };

                // On document ready
                model.init();
                checkViewport();

                $(window).resize(function(event) {
                    /* Act on the event */
                    checkViewport();
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
        if ($('.solution').length) {
            var newSolution = new app.solution();
            newSolution.init({
                container: '.solution'
            });
        }
    });

})(jQuery);