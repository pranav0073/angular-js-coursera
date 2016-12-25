(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.enteredValues = "";
  $scope.message = "";
  $scope.checkIfTooMuch = function () {

    if($scope.enteredValues!=''){

      var items = $scope.enteredValues.split(',');
      //bonus -- removing scenarions where food item entered is a blank

      console.log(items);
      if(items.length <= 3){
        $scope.message = 'Enjoy!';
      }else {
        $scope.message = 'Too much!';
      }
    }else{
      $scope.message = 'Please enter data first';
    }
  };

}

})();
