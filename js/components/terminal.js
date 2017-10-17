/* COMPONENT - carousel */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.terminal = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // Collapse Terminal
            terminalCollapse = function() {
                var terminalContain = $(model.container).parents('.row'),
                    windowWidth = $(window).width();

                if (windowWidth > 767) {
                    $(terminalContain).each(function() {
                        var collapseBtn = $(this).find(model.terminalHeader),
                            collapseItems = $(this).find(model.collapseItem);
                        $(collapseBtn).click(function() {
                            $(collapseItems).collapse('toggle');
                            $(collapseBtn).toggleClass('open');
                        });
                    });
                } else {
                    $(model.container).click(function() {
                       var collapseBtn = $(this).find(model.terminalHeader),
                            collapseItems = $(this).find(model.collapseItem);
                        $(collapseBtn).click(function() {
                            $(collapseItems).collapse('toggle');
                            $(collapseBtn).toggleClass('open');
                        });
                    });
                }
            },

            /***** PUBLIC FUNCTION/INITIALISE ************/
            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.terminal';
                        this.terminalHeader = args.button || '.terminal-heading';
                        this.collapseItem = args.collapseItem || '.collapse';
                    }
                };

                // On document ready
                model.init();
                terminalCollapse();
            },
            reset = function() {};

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
        if ($('.terminal').length) {
            var terminal = new app.terminal();
            terminal.init({
                container: '.terminal'
            });
        }
    });

})(jQuery);