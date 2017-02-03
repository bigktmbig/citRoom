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
	$scope.messages = [{
		id: '535d625f898df4e80e2a125e',
		text: 'Fotzu isoko vo adget ne uba in lup jedzow mi uvinifse epepo het ezezocic bahehufep lid pubuj.',
		userId: 'hilsqdhfods5990K226DHS01NOHoh',
		avatar: 'http://polyligne.be/wp-content/uploads/2014/06/Man_Avatar.gif',
		date: '1455110273886'
	}, {
		id: '535f13ffee3b2a68112b9fc0',
		text: 'Hu girucajam ifuolocag za nifjem ninze dak kadi wi zowolhim asa vouczu ci.',
		userId: '4562KDJYE72930DST283DFY202Dd',
		date: '1455110273886'
	}, {
		id: '546a5843fd4c5d581efa263a',
		text: 'Vad vo ujcofwag pelobhuz wonogmo cikutew imoissuv no doso jum govhi peva aj ven narzir gac rofbufubo il.',
		userId: 'hilsqdhfods5990K226DHS01NOHoh',
		avatar: 'http://polyligne.be/wp-content/uploads/2014/06/Man_Avatar.gif',
		date: '1455110173886'
	}, {
		id: '54764399ab43d1d4113abfd1',
		text: 'Meug viedeloh cuwmaheba gunhe din mif kub ec limvimil boik fuj peze za sow.',
		userId: '4562KDJYE72930DST283DFY202Dd',
		date: '1455110283886'
	}, {
		id: '547643aeab43d1d4113abfd2',
		text: 'Leeczo gokurus cif wepke nidji dabuti wi itco aduzab anru cev do surakip.',
		userId: 'hilsqdhfods5990K226DHS01NOHoh',
		avatar: 'http://polyligne.be/wp-content/uploads/2014/06/Man_Avatar.gif',
		date: '1455110483886'
	}, {
		id: '547815dbab43d1d4113abfef',
		text: 'Piazwac cah opovi cipril sonetpa da bobren teekiril fac ma attu wone piuba de ojeseki.',
		userId: '4562KDJYE72930DST283DFY202Dd',
		date: '1455110583886'
	}, {
		id: '547815dbaqsnod67892d4113abfef',
		text: 'Dubehtak re bodeju em parobji leunvil fetpok iwipog gibzi teb navibahul girofip hikfib ge.',
		userId: '4562KDJYE72930DST283DFY202Dd',
		date: '1455112283886'
	}]
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
