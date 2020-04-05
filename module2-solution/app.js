(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var itemAdder = this;

      itemAdder.items = ShoppingListCheckOffService.getItems();

      itemAdder.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var showList = this;
    
      showList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }
    
    
    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of shopping items
      var toBuyList = [
        {name: "Milk",quantity: "2"},
        {name: "Donuts",quantity: "200"},
        {name: "Cookies",quantity: "300"},
        {name: "Chocolate", quantity: "5"},
        {name: "Soda", quantity: "1"}
      ];

      var boughtList = [];

      service.buyItem = function (itemIndex) {
        var boughtItem = toBuyList[itemIndex];
        boughtList.push(boughtItem);
        toBuyList.splice(itemIndex, 1);
      };
    
      service.getItems = function () {
        return toBuyList;
      };

      service.getBoughtItems = function () {
        return boughtList;
      };
    }
    
    })();
    