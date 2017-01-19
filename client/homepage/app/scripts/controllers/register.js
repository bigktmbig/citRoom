'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the myappApp
 */
 angular.module('myappApp')
 .controller('RegisterCtrl', function (Auth, Client, $scope, $location, $injector, $timeout, $cookieStore) {

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

 	/*execute register via Client model*/
 	function cit_register(object){
 		Client  
 		.create(object)
 		.$promise
 		.then( function(response){
 			$timeout(function(){
 				$scope.$broadcast('cit_register', {data: response, obj: object});
 			});
 		}, function(error){
 			$scope.$broadcast('cit_register', error);
 		});
 	};

 	/*listen event cit_register success*/
 	var destroy_cit_register = $scope.$on('cit_register', function (event, data){
 		//console.log(data);
 		if(data && data.data && data.data.error) {
 			$scope.json = {
 				on: true,
 				message: data,
 				status: data.status + ' ' + data.statusText,
 				class: 'alert-warning'
 			};
 		}else {
 			cit_login(data.obj);
 		}
 		destroy_cit_register();
 	});

 	/*validation register form*/
 	$scope.register_form = {
 		checkValid: $validationProvider.checkValid,
 		submit: function(form) {
 			$validationProvider.validate(form)
 			.success(function(result){
 				/*call cit register*/
 				//var name = $scope.register_form.email.split("@")[0];
 				cit_register({
 					name: $scope.register_form.firstName + ' ' +$scope.register_form.lastName,
 					firstName: $scope.register_form.firstName,
 					lastName: $scope.register_form.lastName,
 					email: $scope.register_form.email,
 					password: $scope.register_form.password
 				});
 			})
 			.error(function(error){
 			});
 		}
 	};
 });