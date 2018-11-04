(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.item1 = false;
  $scope.item2 = true;
  //$scope.counter = 0;
  //$scope.name = "Yaakov";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
    $scope.item1=true;
    $scope.item2=false;
  };

/*  $scope.upCounter = function () {
    $scope.counter++;
  };
*/
  /*$scope.$watch(function () {
    console.log("Digest Loop Fired!");
  })*/

 /* $scope.$watch('onceCounter', function (newValue, oldValue) {
    console.log("onceCounter old value: ", oldValue);
    console.log("onceCounter new value: ", newValue);
  });
  
  $scope.$watch('counter', function (newValue, oldValue) {
    console.log("counter old value: ", oldValue);
    console.log("counter new value: ", newValue);
  });*/

}

})();