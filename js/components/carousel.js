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
                        // this.nextButton = args.nextButton || this.container +' a[data-slide="next"]';
                        // this.prevButton = args.prevButton || this.container +' a[data-slide="prev"]';
                        this.controls = this.container + ' ' + (args.controls || ' .carousel-control');
                    }
                };

                // On document ready
                model.init();
                attachCarousel();



                $(document).on('click', model.controls, function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                });
                // $('a[data-slide="prev"]').click(function(e) {
                //     e.preventDefault();
                //     e.stopPropagation();

                //     $(model.container).carousel('prev');


                // });

                // $('a[data-slide="next"]').click(function(e) {
                //     e.preventDefault();
                //     e.stopPropagation();
                //    $(model.container).carousel('next');

                // });

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