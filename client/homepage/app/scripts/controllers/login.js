'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myappApp
 */
 angular.module('myappApp')
 .controller('LoginCtrl', function (Auth, Client, $scope, $location, $injector, $timeout, $cookieStore) {

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
 				$scope.$broadcast('cit_login_suc', response);
 			});
 		}, function(error){
 			$scope.$broadcast('cit_login_err', error);
 		});
 	};

 	/*listen event cit_login success*/
 	var destroy_cit_login_suc = $scope.$on('cit_login_suc', function (event, data){
 		//console.log(data);
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
 		destroy_cit_login_suc();
 	});

 	/*listen event cit_login error*/
 	var destroy_cit_login_err = $scope.$on('cit_login_err', function (event, data){
 		//console.log(data);
 		$scope.json = {
 			on: true,
 			message: data.data.error.message,
 			status: data.status + ' ' + data.statusText,
 			class: 'alert-warning'
 		};
 		destroy_cit_login_err();
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
 				$location.path('/login');
 			});
 		}
 	};
 });
