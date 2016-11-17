/**
 * Created by uuzii on 3/11/16.
 */
(function () {
    'use strict';

    angular
        .module('ecommerce')
        .factory("apiEcommerce", apiEcommerce)
        .factory("apiEcommerce2", apiEcommerce2);

    apiEcommerce.$inject = ["$resource"];
    function apiEcommerce($resource) {
        return $resource("./server/categories.json");
    }

    apiEcommerce2.$inject = ["$resource"];
    function apiEcommerce2($resource) {
        return $resource("./server/myproducts.json");
    }

})();