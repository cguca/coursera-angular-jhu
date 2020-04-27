(function () {
    "use strict";
    
    angular.module('public')
    .controller('CustomerController', CustomerController);

    CustomerController.$inject = ['$scope', 'MenuService', 'CustomerService'];
    function CustomerController($scope, MenuService, CustomerService) {
        var reg = this;
      
        reg.submit = function () {
            
            
                var promise = MenuService.getMenuItem(reg.customer.favorite_short_name);

                promise.then(function(response) {
                    var item = response;
                    if(!item){
                        reg.customer.bad = true;
                    } else {
                        reg.customer.bad = false;
                        reg.complete = true;
                        reg.customer.favorite = item;
                        CustomerService.setCustomer(reg.customer);
                    }
                    
                });
           
        };
    }
})();