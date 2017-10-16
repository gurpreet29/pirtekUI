/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.richText = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // What does the function do
            videoIframe = function() {
                var videoIframe = $(model.container).find('iframe');
                    videoIframe.wrap('<div class="video-iframe"></div>');
                // $(model.container).swipeleft(function() {
                //     $(this).carousel('next');
                // });
            },



            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.rich-text';
                    }
                };

                // On document ready
                model.init();
                videoIframe();

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
        if ($('.rich-text').length) {
            var richText = new app.richText();
            richText.init({
                container: '.rich-text'
            });
        }
    });

})(jQuery);