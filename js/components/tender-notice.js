/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.tenderNotice = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // ADD AND REMOVE ACTIVE CLASS
            addActiveClass = function(value) {
                $(model.filterBtn).removeClass('active');
                value.addClass('active');
            },

            // TENDER FILTER
            tenderNotice = function() {
                var btnFilter = $(model.container).find(model.filterBtn);
                $(btnFilter).on('click', function() {
                    var $target = $(this).data('target');
                    addActiveClass($(this));
                    if ($target != 'all') {
                        $('.table').css('display', 'none');
                        $('.table[data-status="' + $target + '"]').fadeIn('slow');
                    } else {
                        $('.table').css('display', 'none').fadeIn('slow');
                    }
                });
                
            },

            tableCount = function() {
                var tableCount = $(model.container).find('table');

                $(tableCount).each(function(i) {
                    $(this).find('.badge').text(++i);
                });

            },



            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.tender-notice';
                        this.filterBtn = args.filterBtn || '.btn-filter';
                    }
                };

                // On document ready
                model.init();
                tenderNotice();
                tableCount();

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
        if ($('.tender-notice').length) {
            var tenderNotice = new app.tenderNotice();
            tenderNotice.init({
                container: '.tender-notice'
            });
        }
    });
})(jQuery);