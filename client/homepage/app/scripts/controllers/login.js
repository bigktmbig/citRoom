'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myappApp
 */
 angular.module('myappApp')
 .controller('LoginCtrl', function ($state, Auth, Client, $scope, $location, $injector, $timeout, $cookieStore) {
 	var $validationProvider = $injector.get('$validation');

 	$scope.json = {
 		on: false,
 		message: '',
 		status: '',
 		class: ''
 	};
 	/*execute login via Client model*/
 	function cit_login(object){
 		Client  
 		.login(object)
 		.$promise
 		.then( function(response){
 			$timeout(function(){
 				$scope.$broadcast('cit_login', response);
 			});
 		}, function(error){
 			$scope.$broadcast('cit_login', error);
 		});
 	};

 	/*listen event cit_login success*/
 	var destroy_cit_login = $scope.$on('cit_login', function (event, data){
 		//console.log(data);
 		if(data && data.data && data.data.error) {
 			$scope.json = {
 				on: true,
 				message: data.data.error.message,
 				status: data.status + ' ' + data.statusText,
 				class: 'alert-warning'
 			};
 		}else {
 			var userIsu = {
 				name: data.user.name || '',
 				email: data.user.email,
 				roles: data.roles,
 				accessToken: data.id,
 				userId: data.userId
 			};
 			$cookieStore.put('currentUser', userIsu);
 			Auth.setUser(userIsu);
 			Auth.changeOnOff(true);
 		}
 		destroy_cit_login();
 	});

 	/*validation login form*/
 	$scope.login_form = {
 		checkValid: $validationProvider.checkValid,
 		submit: function(form) {
 			$validationProvider.validate(form)
 			.success(function(result){
 				/*call cit login*/
 				cit_login({
 					email: $scope.login_form.email,
 					password: $scope.login_form.password,
 					filter:{
 						include: {relation: "user"}
 					}
 				});
 			})
 			.error(function(error){
 			});
 		}
 	};
 });
