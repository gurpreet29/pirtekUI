/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.multicarousel = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // What does the function do

            smallCarousel = function() {

                $('.multicarousel .carousel .item').each(function() {
                    var itemToClone = $(this);

                    for (var i = 1; i < 5; i++) {
                        itemToClone = itemToClone.next();

                        // wrap around if at end of item collection
                        if (!itemToClone.length) {
                            itemToClone = $(this).siblings(':first');
                        }

                        // grab item, clone, add marker class, add to collection
                        itemToClone.children(':first-child').clone().addClass("cloneditem-" + (i)).appendTo($(this));
                    }
                });
            },

            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.multicarousel';
                    }
                };

                // On document ready
                model.init();
                smallCarousel();
                

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
        if ($('.multicarousel').length) {
            var newCarousel = new app.multicarousel();
            newCarousel.init({
                container: '.multicarousel'
            });
        }
    });

})(jQuery);