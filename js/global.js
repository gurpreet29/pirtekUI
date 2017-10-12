 /* global functions */
 window.uif = window.uif || {};

// function list
// gridHeight fixes height for the item in a row (waits for 100ms to set height)

 (function($) {
     'use strict';

     window.uif.gridHeight = function() {

         if ($(window).width() > 767) {
             setTimeout(function() {
                 $('.category-grid').find('li:nth-child(4n + 1)').each(function() {
                     var maxHeight = 0;
                     $(this).add($(this).nextAll().slice(0, 3)).each(function() {
                         maxHeight = Math.max($(this).find(".caption").height(), maxHeight);
                     }).find(".caption").height(maxHeight);
                 });
             }, 100);
         } else {
             $('.category-grid ul li').find('.caption').removeAttr('style');
         }

     };

     /* DOCUMENT LOAD */
     $(function() {

         /***** SET gridHeight  **********/


         // uif.gridHeight();

         $(window).on('resize', function() {

             // uif.gridHeight();
         });
     });
 })(jQuery);