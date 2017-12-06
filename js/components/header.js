/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.header = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // What does the function do
            toggleSearch = function() {
                $(model.searchForm).slideToggle();
            },



            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || 'header';
                        this.searchButton = args.searchButton || this.container + ' .search-btn';
                        this.searchForm = args.searchForm || this.container + ' form';
                    }
                };

                // On document ready
                model.init();
                // toggleSearch();

                $(model.searchButton).on('click', toggleSearch);

                // $(document).on('click', model.selectBox, checkSelected);


                $(window).resize(function(event) {

                    if ($(window).width() > 768) {
                        $(model.searchForm).removeAttr('style');
                    }
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
        if ($('header').length) {
            var newHeader = new app.header();
            newHeader.init({
                container: 'header'
            });
        }
    });

})(jQuery);