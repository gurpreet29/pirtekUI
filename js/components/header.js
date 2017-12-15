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
            // checks for call text / call number to write in mobile nav.
            callUs = function() {
             
                var callText =$(model.callUs).data('calltext');
                var contactNumber =$(model.callUs).data('callnumber');
                
                $(model.callButton).text(callText + " " + contactNumber ).attr('href', 'tel:' +contactNumber );
                
            },



            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || 'header';
                        this.searchButton = args.searchButton || this.container + ' .search-btn';
                        this.searchForm = args.searchForm || this.container + ' form';
                        this.callUs = args.callUs || this.container + ' .call-us';
                        this.callButton = args.callButton || this.container + ' .call-btn';

                    }
                };

                // On document ready
                model.init();
                callUs();

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