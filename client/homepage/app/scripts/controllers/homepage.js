'use strict';

/**
* @ngdoc function
* @name myappApp.controller:HomepageCtrl
* @description
* # HomepageCtrl
* Controller of the myappApp
*/
angular.module('myappApp')
.controller('HomepageCtrl', function ($scope, $state, Auth, $socket, $injector, $timeout, Group, Client) {
	var $validationProvider = $injector.get('$validation');

	$scope.list_group = [];
	$scope.list_post = [];
	$scope.list_user = [];
	$scope.current_group = '';
	$scope.current_user = Auth.user;
	$scope.reset = function () {
		$("#toggleCSS").attr("href", "bower_components/alertify.js/themes/alertify.default.css");
		alertify.set({
			labels : {
				ok     : "OK",
				cancel : "Cancel"
			},
			delay : 5000,
			buttonReverse : false,
			buttonFocus   : "ok"
		});
	};

	/*Get list group available*/
	function find_user(obj) {
		Client  
		.find(obj)
		.$promise
		.then( function(response){
			$timeout(function(){
				$scope.$broadcast('find_user', response);
			});
		}, function(error){
			$scope.$broadcast('find_user', error);
		});
	}

	/*Call find user*/
	find_user({filter: {where: {onOff: true}}});

	/*destroy broadcast find user*/
	var destroy_find_user = $scope.$on('find_user', function (event, data){
		//console.log(data);
		if(data.length > 0) {
			$scope.list_user = data;
		}
		destroy_find_user();
	});

	/*Get list group available*/
	function find_group(obj) {
		Group  
		.find(obj)
		.$promise
		.then( function(response){
			$timeout(function(){
				$scope.$broadcast('find_group', response);
			});
		}, function(error){
			$scope.$broadcast('find_group', error);
		});
	}

	/*Call find group*/
	find_group({});

	/*destroy broadcast find group*/
	var destroy_find_group = $scope.$on('find_group', function (event, data){
		//console.log(data);
		if(data.length > 0) {
			$scope.list_group = data;
			$scope.current_group = data[0].id;
		}
		destroy_find_group();
	});

	/*Determined join group*/
	$scope.join_group = function (groupId) {
		$scope.current_group = groupId;
	};

	/*form_chat submit and then create event group chat message*/
	$scope.form_chat = {
		submit: function(form) {
			$validationProvider.validate(form)
			.success(function(res){
				$socket.emit('group chat message', {'msg':$scope.your_message, 'groupId': $scope.current_group, 'user': $scope.current_user});
				$scope.your_message = null;
				alertify.success(res);
			})
			.error(function(err){
				console.log(err);
				alertify.error(err);
			});
		}
	};

	$(function(){
		/*listen event group chat message*/
		$socket.on('group chat message', function(data){
			if(data.user && data.user.name) {
				$('#messages'+data.groupId).append($('<li><h4>'+ data.user.name +'</h4>'+ data.msg +'</li>'));
			}else {
				$('#messages'+data.groupId).append($('<li><h4>Anonymous</h4>'+ data.msg +'</li>'));
			}
			$('.tab-content').scrollTop($('.tab-content')[0].scrollHeight);
		});
	});
});
