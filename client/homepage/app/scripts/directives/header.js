'use strict';

/**
 * @ngdoc directive
 * @name myappApp.directive:header
 * @description
 * # header
 */
angular.module('myappApp')
  .directive('header', function (Auth) {
 	return {
 		templateUrl: 'scripts/directives/header_directive.html',
 		restrict: 'C',
 		link: function postLink($scope) {
 			$scope.logout = function(){
 				var user = { 
 					email: '',
 					roles: ['anonymous'],
 					accessToken: '',
 					userId: null
 				};
 				Auth.logout(user);
 			};
 			$scope.isLogin = Auth.isLoggedIn();
 		},
 		controller : function($scope, Auth){
 			$scope.isLogin = Auth.isLoggedIn();
 			$scope.avatarUser = null;
 		}
 	};
 });
