(function () {
'use strict';

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
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    // templateUrl: 'src/menuapp/templates/main-shoppinglist.template.html',
    controller: 'MainMenuAppController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  
  .state('itemDetail', {
    url: '/item-detail/{shortName}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      dishes: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getMenuForCategory($stateParams.shortName)
                .then(function (items) {
                  return items.data.menu_items;
                });
              }]
    }
  });

}

})();
