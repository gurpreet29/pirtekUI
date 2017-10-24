/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.accordion = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // accordion counter
            accordionCounter = function() {
                var accdCount = $(model.container).find('h6');
                console.log(accdCount);

                $(accdCount).each(function(i) {
                    $(this).find('.badge').text(++i);
                });
            },

            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.accordion';
                    }
                };

                // On document ready
                model.init();
                accordionCounter();

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
        if ($('.accordion').length) {
            var accordion = new app.accordion();
            accordion.init({
                container: '.accordion'
            });
        }
    });
})(jQuery);