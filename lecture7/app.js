(function () {
	'use strict';
	//x = 'a';
	
	angular.module('nameCalculator', [])

	.controller('nameCalculatorController', function($scope){
		$scope.name='';
		
		$scope.totalValue = 0;
		
		$scope.displayNumeric = function() {
			var totalNameValue = calcNameValue($scope.name);
			$scope.totalValue = totalNameValue;
		};

		function calcNameValue(string){
			var totalStringValue = 0;
			for(var i=0;i<string.length;i++){
				totalStringValue += string.charCodeAt(i);
			}
			return totalStringValue;
		};
		

	});
	

})();