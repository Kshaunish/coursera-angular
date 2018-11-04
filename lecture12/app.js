(function () {
	'use strict';
	//x = 'a';
	
	angular.module('lecture12', [])

	.controller('lecture12Controller',lecture12Controller);

	lecture12Controller.$inject=['$scope', '$filter'];

	function lecture12Controller ($scope, $filter){
		
		//$scope.name='';
		
		$scope.sayMessage = function () {
			//$scope.name = $scope.name + 'A';

			var msg = $scope.name;
			$scope.name = $filter('uppercase')(msg);
			//$scope.output = $filter('uppercase')(msg);
			return $scope.name;
			//return $scope.output;				
		};
		

	};
	

})();