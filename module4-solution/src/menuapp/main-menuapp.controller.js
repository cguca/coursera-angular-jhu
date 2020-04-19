(function () {
'use strict';


angular.module('data')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['items'];
function MainMenuAppController(items) {
  var mainList = this;
  mainList.items = items;
}

})();
