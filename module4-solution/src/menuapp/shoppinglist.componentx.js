(function () {
'use strict';

// angular.module('ShoppingList')
angular.module('MenuApp')
.component('shoppingList', {
  templateUrl: 'src/menuapp/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
