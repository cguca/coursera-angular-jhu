(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['dishes']
function ItemDetailController(dishes) {
  var itemDetail = this;
  itemDetail.category = dishes.category.name;
  itemDetail.dishes = dishes.menu_items;
}

})();
