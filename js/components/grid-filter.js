/* COMPONENT - grid filter */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.gridFilter = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // check for dropdown selected to update active anchor
            checkSelected = function() {
                var selectValue = $(model.selectBox + ' :selected').text();

                $(model.filterList).each(function(index, el) {
                    $(this).find('a').removeClass('active');
                    if ($(this).find('a').text() === selectValue) {
                        $(this).find('a').addClass('active');
                    }

                });

            },
            // checks for Fiter selected to update select option
            checkFilter = function() {

                var selectFilter = $(this).text();
                $(model.filterList + ' a').removeClass('active');

                $(this).addClass('active');
                $(model.selectBox + ' option').each(function(index, el) {
                    $(this).prop('selected', false);
                    if ($(this).text() === selectFilter) {
                        $(this).prop('selected', true);
                    }

                });

            },

            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.grid-filter';
                        this.selectBox = this.container + ' ' + (args.selectBox || 'select');
                        this.filterList = this.container + ' ' + (args.filterList || 'ul >li');


                    }
                };

                // On document ready
                model.init();
                $(document).on('change', model.selectBox, checkSelected);
                $(document).on('click', model.filterList + ' a', checkFilter);


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
        if ($('.grid-filter').length) {
            var newFilter = new app.gridFilter();
            newFilter.init({
                container: '.grid-filter'
            });
        }
    });

})(jQuery);