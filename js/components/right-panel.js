/* COMPONENT - quick link */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.rightPanel = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/


            // checks the height for component (columnHeight) to match height to right panel
            fixHeight = function() {

                if ($(window).height() > 767) {
                    $(model.columnHeight).css('height', $(model.columnHeight).height());
                } else {
                    $(model.container).removeAttr('style');
                }

            },

            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.right-panel';
                        this.columnHeight = args.columnHeight || '.columnHeight';


                    }
                };

                // On document ready
                model.init();

                fixHeight();
                $(window).resize(function(event) {
                    /* Act on the event */
                    fixHeight();
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
        if ($('.right-panel').length) {
            var newRightPanel = new app.rightPanel();
            newRightPanel.init({
                container: '.right-panel'
            });
        }
    });

})(jQuery);