'use strict';

/**
 * @ngdoc directive
 * @name myappApp.directive:footer
 * @description
 * # footer
 */
angular.module('myappApp')
  .directive('footer', function (Auth) {
  return {
    templateUrl: 'views/footer.html',
    restrict: 'C',
    link: function postLink(scope) {
      
    }
  };
 });
