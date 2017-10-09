/* COMPONENT - quick link */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.quickLink = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/


            // checks the height for component to place half margin to minus value for desktop
            positionBox = function() {

                var containerHeight = $(model.container).height();
                if ($(window).height() > 767) {
                    $(model.container).css('margin-top', -(containerHeight / 2));
                } else {
                    $(model.container).removeAttr('style');
                }




            },

            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.quick-link';



                    }
                };

                // On document ready
                model.init();
                positionBox();
                $(window).resize(function(event) {
                    /* Act on the event */

                    positionBox();
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
        if ($('.quick-link').length) {
            var newQuickLink = new app.quickLink();
            newQuickLink.init({
                container: '.quick-link'
            });
        }
    });

})(jQuery);