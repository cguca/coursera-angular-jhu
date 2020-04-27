(function () {
    "use strict";
    
    angular.module('public')
    .controller('InfoController', InfoController);
    
    InfoController.$inject = ['theCustomer','ApiPath'];
    function InfoController(theCustomer, ApiPath) {
        var $ctrl = this;
        $ctrl.theCustomer = theCustomer;
        $ctrl.basePath = ApiPath;
    }
})();