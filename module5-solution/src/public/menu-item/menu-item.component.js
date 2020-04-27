(function () {
"use strict";

angular.module('public') // on public modudule
.component('menuItem', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: { // we pass data into template
    menuItem: '<'
  },
  controller: MenuItemController // no ctrl as since it defaults to $ctrl
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
