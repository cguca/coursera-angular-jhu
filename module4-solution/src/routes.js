(function () {
'use strict';

// angular.module('ShoppingList')
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  // .state('mainList', {
  //   url: '/main-list',
  //   templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
  //   controller: 'MainShoppingListController as mainList',
  //   resolve: {
  //     items: ['ShoppingListService', function (ShoppingListService) {
  //       return ShoppingListService.getItems();
  //     }]
  //   }
  // })

  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['ShoppingListService', function (ShoppingListService) {
        return ShoppingListService.getAllCategories();
      }]
    }
  })
  
  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      dishes: ['$stateParams', 'ShoppingListService',
            function ($stateParams, ShoppingListService) {
              return ShoppingListService.getMenuForCategory()
                .then(function (items) {
                  return items.data.menu_items;
                  // return items[$stateParams.itemId];
                });
            }]
      // item: ['$stateParams', 'ShoppingListService',
      //       function ($stateParams, ShoppingListService) {
      //         return ShoppingListService.getMenuForCategory()
      //           .then(function (items) {
      //             return items.data.menu_items;
      //             // return items[$stateParams.itemId];
      //           });
      //       }]
    }
  });

  // .state('itemDetail', {
  //   url: '/item-detail/{itemId}',
  //   templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   resolve: {
  //     item: ['$stateParams', 'ShoppingListService',
  //           function ($stateParams, ShoppingListService) {
  //             return ShoppingListService.getItems()
  //               .then(function (items) {
  //                 return items[$stateParams.itemId];
  //               });
  //           }]
  //   }
  // });
}

})();
