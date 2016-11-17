(function(){
    'use strict';

    angular
        .module("marvel")
        .factory("apiMarvel",apiMarvel);

    apiMarvel.$inject = ["$resource"];
    function apiMarvel($resource){
        return $resource("http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=4339f97c8d2f4e6b58223609ccd215b8&hash=a00641a5c54db3011f573060d17696d3");
    }


})();

