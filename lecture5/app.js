(function () {
	'use strict';
	//x = 'a';
	
	angular.module('myFirstApp', [])
	
	.controller('myFirstController', function ($scope){
		$scope.name="ved";
		$scope.sayHello = function () {
			return "Hi "+ $scope.name;
		};	
	});

})();