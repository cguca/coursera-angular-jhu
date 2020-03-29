(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchmenu = "";
  $scope.message = "";

 $scope.checkmenu = function() {
  
  var totalMenuItems = parseAndCount($scope.lunchmenu);
  var theJudgement = determineMessage(totalMenuItems);

  $scope.message = theJudgement;

 };

 function parseAndCount(menu) {
    if(menu === "") {
      return 0;
    }  
    
    var items = menu.split(',');
    var nonEmptyItems = 0;
    for(var i = 0; i < items.length; i++) {
      if(items[i] !== "") {
        nonEmptyItems += 1;
      }
    }

    return nonEmptyItems;
  }

  function determineMessage(count) {
    if(count === 0) {
      return "Please enter data first";
    } else if (count <= 3) {
      return "Enjoy!";
    } else {
      return "Too much!";
    }
  }
}

})();
