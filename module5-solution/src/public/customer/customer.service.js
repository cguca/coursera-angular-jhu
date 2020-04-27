(function () {
    "use strict";
    
    angular.module('common')
    .service('CustomerService', CustomerService);
    
    
    function CustomerService() {
      var service = this;
      service.customer = {};

      service.setCustomer = function (theCust) {
        service.customer = theCust;;
      };

      service.getCustomer = function () {
        return service.customer;
      };
    }
})();