'use strict';

/**
 * @ngdoc directive
 * @name myappApp.directive:header
 * @description
 * # header
 */
 angular.module('myappApp')
 .directive('header', function (Auth, $document) {
 	return {
 		templateUrl: 'views/header.html',
 		restrict: 'C',
 		link: function postLink($scope, $location) {
 			$scope.logout = function(){
 				Auth.changeOnOff(false);
 			};
 			$scope.isLogin = Auth.isLoggedIn();
 		},
 		controller : function($scope, Auth, $location, $document){
 			$scope.isActive = function (viewLocation) { 
 				// console.log(viewLocation);
 				// console.log($location.path());
 				return viewLocation === $location.path();
 			};

 			$scope.toTheTop = function() {
 				$document.scrollTopAnimated(0, 1000).then(function() {
 					console && console.log('You just scrolled to the top!');
 				});
 			}
 			$scope.isLogin = Auth.isLoggedIn();
 			$scope.avatarUser = null;
 		}
 	};
 });
