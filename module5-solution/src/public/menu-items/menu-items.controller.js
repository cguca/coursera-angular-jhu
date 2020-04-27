(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

// MUst wire controller into the routes, state
MenuItemsController.$inject = ['menuItems']; // we need to inject the menuItems data
function MenuItemsController(menuItems) { // menuItems comes from resolve of our state resolve
  var $ctrl = this;
  $ctrl.menuItems = menuItems; // export menuItems array as a property of the menuItems controller
}

})();
