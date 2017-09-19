// register
Vue.filter('formatDate', function (date) {
  return date.substring(0,4) + ' / ' + date.substring(4,6) + ' / ' + date.substring(6);
});
// getter, return the filter if registered
var myFilter = Vue.filter('formatDate');
