/* COMPONENT - category grid */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.categoryGrid = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // fixes height for category item in its row
            itemHeight = function() {

                if ($(window).width() < 768) {
                    $(model.item).find(model.textCaption).removeAttr('style');

                } else {

                }


                $(model.textCaption).removeAttr('style');
                var rowMax = 0,

                    totalItem = $(model.item).length,
                    itemsPerRow = 4,
                    totalRow = totalItem / itemsPerRow;

                $(model.textCaption).each(function(index, el) {
                        console.log(index % itemsPerRow);

                });

                // for (var i = 0; i < totalRow; i++) {

                //     console.log(i * itemsPerRow + ' to ' + (i + itemsPerRow -1 ));


                //     $(model.textCaption +":gt("+ (i * itemsPerRow) +"):lt("+ (itemsPerRow -1) +")").each(function(index, el) {
                //         console.log('itemHeight' + $(this).height()  + '  html '+ $(this).html());
                //         rowMax = $(this).height() > rowMax ? $(this).height() : rowMax
                //         $(this).css('min-height', rowMax);

                //     });

                // };






            },

            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.category-grid';
                        this.item = this.container + ' ' + (args.item || 'ul li');
                        this.textCaption = this.item + ' ' + (args.textCaption || '.caption');


                    }
                };

                // On document ready
                model.init();
                itemHeight();

                $(window).resize(function(event) {
                    /* Act on the event */
                    itemHeight();
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
        if ($('.category-grid').length) {
            var newSolution = new app.categoryGrid();
            newSolution.init({
                container: '.category-grid'
            });
        }
    });

})(jQuery);