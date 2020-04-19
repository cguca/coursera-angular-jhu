(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['dishes']
function ItemDetailController(dishes) {
  var itemDetail = this;
  itemDetail.dishes = dishes;
}

})();
