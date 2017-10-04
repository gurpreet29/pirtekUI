// /* COMPONENT - contact-map */


// window.app = window.app || {};

// (function($) {
//     'use strict';

//     /*********************************************************************************/
//     /*****   COMPONENT CONSTRUCTOR                                       ************/
//     /*******************************************************************************/

//     window.app.contactMap = function() {

//         var model,

//             /***** PRIVATE FUNCTIONS ************/

//             // What does the function do
//             attachCarousel = function() {


//             },
//             //Google Maps JS
//             //Set Map
//             initialize = function() {
//                 var myLatlng = new google.maps.LatLng(53.3333, -3.08333);
//                 // var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
//                 var mapOptions = {
//                     zoom: 11,
//                     center: myLatlng,
//                     mapTypeId: google.maps.MapTypeId.ROADMAP
//                 }

//                 var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//                 //Callout Content
//                 var contentString = 'Some address here..';
//                 //Set window width + content
//                 var infowindow = new google.maps.InfoWindow({
//                     content: contentString,
//                     maxWidth: 500
//                 });

//                 //Add Marker
//                 var marker = new google.maps.Marker({
//                     position: myLatlng,
//                     map: map,
//                     // icon: imagePath,
//                     title: 'image title'
//                 });

//                 google.maps.event.addListener(marker, 'click', function() {
//                     infowindow.open(map, marker);
//                 });

//                 //Resize Function
//                 google.maps.event.addDomListener(window, "resize", function() {
//                     var center = map.getCenter();
//                     google.maps.event.trigger(map, "resize");
//                     map.setCenter(center);
//                 });
//             },



//             /***** PUBLIC FUNCTION/INITIALISE ************/

//             init = function(args) {
//                 args = args || {};
//                 model = {
//                     init: function() {
//                         this.container = args.container || '.contact-map';
//                     }
//                 };

//                 // On document ready
//                 model.init();
//                 // attachCarousel();


//                 google.maps.event.addDomListener(window, 'load', initialize);




//             },

//             reset = function() {

//             };

//         // Return public functions only
//         return {
//             init: init,
//             reset: reset
//         };
//     };



//     /*********************************************************************************/
//     /*****   ON DOCUMENT LOAD                                            ************/
//     /*******************************************************************************/

//     $(function() {
//         if ($('.contact-map').length) {
//             var newMap = new app.contactMap();
//             newMap.init({
//                 container: '.contact-map'
//             });
//         }
//     });

// })(jQuery);