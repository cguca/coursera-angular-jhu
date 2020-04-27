(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl'
      ,
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', { // data from menu service via controller
      url: '/menu/{category}', // request parameter
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: { // 
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category); // must pass category param use stateParams
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/customer/signup.html',
      controller: 'CustomerController',
      controllerAs: 'custCtrl'
      // ,
      // resolve: {
      //   item: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
      //     return MenuService.getMenuItem($stateParams.category);
      //   }]
      // }
    })
    .state('public.info', {
      url: '/info',
      templateUrl: 'src/public/customer/info.html',
      controller: 'InfoController',
      controllerAs: 'infoCtrl',
      resolve: {
        theCustomer: ['CustomerService', function (CustomerService) {
          return CustomerService.getCustomer();
        }]
      }
    });
}
})();
