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
    templateUrl: 'scripts/directives/footer_directive.html',
    restrict: 'C',
    link: function postLink(scope) {
      scope.logout = function(){
        var user = { 
          username: '',
          roles: ['anonymous'],
          accessToken: '',
          userId: null
        };
        Auth.logout(user);
      };
    }
  };
 });
