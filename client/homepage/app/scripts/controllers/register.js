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

 	/*execute register via Client model*/
 	function cit_register(object){
 		Client  
 		.create(object)
 		.$promise
 		.then( function(response){
 			$timeout(function(){
 				$scope.$broadcast('cit_register_suc', {data: response, obj: object});
 			});
 		}, function(error){
 			$scope.$broadcast('cit_register_err', error);
 		});
 	};

 	/*listen event cit_register success*/
 	var destroy_cit_register_suc = $scope.$on('cit_register_suc', function (event, data){
 		//console.log(data);
 		cit_login(data.obj);
 		destroy_cit_register_suc();
 	});

 	/*listen event cit_register error*/
 	var destroy_cit_register_err = $scope.$on('cit_register_err', function (event, data){
 		//console.log(data);
 		$scope.json = {
 			on: true,
 			message: data.data.error.message,
 			status: data.status + ' ' + data.statusText,
 			class: 'alert-warning'
 		};
 		$location.path('/register');
 		destroy_cit_register_err();
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
 				$location.path('/register');
 			});
 		}
 	};
 });