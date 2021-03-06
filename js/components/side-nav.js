/* COMPONENT - sideNav */
window.app = window.app || {};

(function($) {
    'use strict';

    /*********************************************************************************/
    /*****   COMPONENT CONSTRUCTOR                                       ************/
    /*******************************************************************************/

    window.app.sideNav = function() {

        var model,

            /***** PRIVATE FUNCTIONS ************/

            // 
            changeActive = function() {

                var panelName = $(this).text();
                $(model.activePanel).text(panelName);
                if ($(window).width() < 768) {
                    openPanel();
                }

            },
            // 
            openPanel = function() {

                $(model.panelGroup).slideToggle();


            },

            /***** PUBLIC FUNCTION/INITIALISE ************/

            init = function(args) {
                args = args || {};
                model = {
                    init: function() {
                        this.container = args.container || '.side-nav';
                        this.activePanel = this.container + ' ' + (args.activePanel || '.active-panel');
                        this.panelGroup = this.container + ' ' + (args.panelGroup || '.panel-group');
                        this.panelTitle = this.container + ' ' + (args.panelTitle || '.panel a');
                        this.mainBody = args.mainBody || 'main';
                        this.checkSideNavClass = args.checkSideNavClass || 'has-sidenav';


                    }
                };

                // On document ready
                model.init();
                // adds class to <main> to tell page has .side-nav
                $(model.mainBody).addClass('has-sidenav');

                $(document).on('click', model.panelTitle, changeActive);

                $(document).on('click', model.activePanel, openPanel);





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
        if ($('.side-nav').length) {
            var newSideNav = new app.sideNav();
            newSideNav.init({
                container: '.side-nav'
            });
        }
    });

})(jQuery);