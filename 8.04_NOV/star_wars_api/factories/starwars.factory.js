/**
 * Created by urielmiranda on 03/11/16.
 */
(function(){
    'use strict';

    angular
        .module("starwars")
        .factory("apistar",apistar);

    apistar.$inject = ["$resource"];
    function apistar($resource){
        return $resource("http://swapi.co/api/:category/:id");
    }

})();