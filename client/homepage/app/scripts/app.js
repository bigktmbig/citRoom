'use strict';

/**
* @ngdoc overview
* @name myappApp
* @description
* # myappApp
*
* Main module of the application.
*/
angular
.module('myappApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'cfp.loadingBar',
  'permission',
  'lbServices',
  'services.config',
  'validation',
  'validation.rule',
  'validation.customer',
  'ngSocket',
  'duScroll'
  ])
.config(["$socketProvider", function ($socketProvider) {
  $socketProvider.setUrl("http://localhost:3000");
}])
//config when before run up
// .run(['$rootScope', '$state', 'Auth', '$cookieStore', function($rootScope, $state, Auth) {
//   $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
//     //console.log(toState.data.permissions);
//     if (!('data' in toState) || !('permissions' in toState.data)) {
//       $rootScope.error = "Access undefined for this state";
//       event.preventDefault();
//     } else if (!Auth.authorize(toState.data.permissions)) {
//       $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
//       event.preventDefault();
//       if (fromState.url === '^') {
//         if (Auth.isLoggedIn() === true) {
//           $rootScope.error = null;
//           $state.go('homepage.main');
//         }else {
//           $rootScope.error = null;
//           $state.go('public.main');
//         }
//       }
//     }
//   });

// }])
//define roles
.run(function(Permission, Auth) {
  Permission.defineRole('public', function() {
    return true;
  }).defineRole('anonymous', function() {
    if (!Auth.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }).defineRole('member', function() {
    var roles = Auth.user.roles;
    return roles.indexOf('member') > -1;
  }).defineRole('manager', function() {
    var roles = Auth.user.roles;
    return roles.indexOf('manager') > -1;
  }).defineRole('admin', function() {
    var roles = Auth.user.roles;
    return roles.indexOf('admin') > -1;
  }).defineRole('big', function() {
    var roles = Auth.user.roles;
    return roles.indexOf('big') > -1;
  });
});
