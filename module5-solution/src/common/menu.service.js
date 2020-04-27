(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$q', '$http', 'ApiPath'];
function MenuService($q, $http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};

    // place request parameter into config object
    if (category) {
      config.params = {'category': category};
    }

    // call returns promise, so use then pass response to function to get data from response
    // need to create state in routes.js
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (short_name) {
    // call returns promise, so use then pass response to function to get data from response
    // need to create state in routes.js
    return $http.get(ApiPath + '/menu_items/' + short_name+'.json')
    .then(function (response) {
      var item =  response.data;
      return item;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      // $http.reject(response);
      return false;
    }).catch(function(error) {

       $q.reject(error);
      console.log('error', error)
    });
  };

}



})();
