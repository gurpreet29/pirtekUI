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
            // itemHeight = function() {

            //     $(model.textCaption).removeAttr('style');
            //     var rowMax = 0,

            //         totalItem = $(model.item).length,
            //         itemsPerRow = 4,
            //         totalRow = totalItem / itemsPerRow;

            //     $(model.textCaption).each(function(index, el) {
            //         // console.log(index % itemsPerRow);

            //     });


            // },

            // List Row height
            listRowHeight = function(){
                if($(window).width() > 767){
                    $(model.container).find('li:nth-child(4n + 1)').each(function(){
                        var maxHeight = 0;
                        $(this).add($(this).nextAll().slice(0,3)).each(function(){
                            maxHeight = Math.max($(this).find(".caption").height(), maxHeight);
                        }).find(".caption").height(maxHeight);
                    });
                } else {
                    $(model.item).find(model.textCaption).removeAttr('style');
                }
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
                // itemHeight();
                listRowHeight();

                $(window).resize(function(event) {
                    /* Act on the event */
                    // itemHeight();
                    listRowHeight();
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