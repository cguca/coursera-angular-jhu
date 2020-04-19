(function () {
'use strict';

// angular.module('ShoppingList')
angular.module('MenuApp')
.service('ShoppingListService', ShoppingListService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// ShoppingListService.$inject = ['$q', '$timeout']
ShoppingListService.$inject = ['$http', 'ApiBasePath']
// function ShoppingListService($q, $timeout) {
function ShoppingListService($http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // called from routes js.
  service.getAllCategories = function () {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return promise;
    // promise.then(function (response) {
    //    var menu_items = response.data;
    //    return menu_items;
    //   // list.foundItems = MenuSearchService.getMatchedMenuItems(menu_items, list.searchterm);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
  };

  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
        // category: "B"
      }
    });

    return response;
  };

  // Simulates call to server
  // Returns a promise, NOT items array directly

  // service.getItems = function () {
  //   var deferred = $q.defer();

  //   // Wait 2 seconds before returning
  //   $timeout(function () {
  //     // deferred.reject(items);
  //     deferred.resolve(items);
  //   }, 800);

  //   return deferred.promise;
  // };
}

})();
