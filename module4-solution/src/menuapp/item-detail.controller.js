(function () {
'use strict';

// angular.module('ShoppingList')
angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
// ItemDetailController.$inject = ['item']
ItemDetailController.$inject = ['dishes']
// function ItemDetailController(item) {
function ItemDetailController(dishes) {
  var itemDetail = this;
  itemDetail.dishes = dishes;
  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();
