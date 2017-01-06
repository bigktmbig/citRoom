'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
 angular.module('myappApp')
 .controller('MainCtrl', function ($scope, $location) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.isActive = function (viewLocation) { 
 		return viewLocation === $location.path();
 	};

 	$scope.toTheTop = function() {
 		$document.scrollTopAnimated(0, 1000).then(function() {
 			console && console.log('You just scrolled to the top!');
 		});
 	}
 });
