(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    restrict: "A",
    templateUrl: 'foundItems.html',
    scope: {
      list: '<foundItems',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.searchterm = "";
  //list.foundItems = [];

  list.getMatchedMenuItems = function () {
    var promise = MenuSearchService.getMenuItems();

    promise.then(function (response) {
      var menu_items = response.data.menu_items;
      list.foundItems = MenuSearchService.getMatchedMenuItems(menu_items, list.searchterm);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  list.removeItem = function (itemIndex) {
    list.foundItems.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    return response;
  };


  service.getMatchedMenuItems = function (menu_items, searchterm) {
    var foundItems = [];
   
    if(searchterm === "") {
      return foundItems;
    }
    for (var i = 0; i < menu_items.length; i++) {
      var description = menu_items[i].description;
      if (description.toLowerCase().indexOf(searchterm) !== -1) {
        foundItems.push(menu_items[i]);
      }
    }

    return foundItems;
  }
}

})();
