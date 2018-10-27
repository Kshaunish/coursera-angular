(function () {
	'use strict';
	
	angular.module('LunchCheck', [])
	
	.controller('NameExtractor', function ($scope){
		$scope.name="";
		$scope.msg="";
		
		$scope.calcLengthOfInput = function () {

			var words= $scope.name;
			var ListOfWords=words.split(',');
			var NumberOfWords = ListOfWords.length;
			var num=NumberOfWords;
			
			if(ListOfWords[0]==""){
				$scope.msg = "Please enter data first";				
			}
			else if(num > 3) {
				$scope.msg = "Too Much";				
			}
			else if(num >=1 && num <=3){
				$scope.msg = "Enjoy!";
			}
		}
	});

})();