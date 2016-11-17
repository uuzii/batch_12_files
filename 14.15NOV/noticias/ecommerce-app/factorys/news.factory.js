/**
 * Created by uuzii on 3/11/16.
 */
(function () {
    'use strict';

    angular
        .module('news')
        .factory("apiNews", apiNews)
        .factory("apiNews2", apiNews2)
        .factory("service", services);

    apiNews.$inject = ["$resource"];
    function apiNews($resource) {
        return $resource("./server/myproducts.json");
    }

    apiNews2.$inject = ["$resource"];
    function apiNews2($resource) {
        return $resource("./server/myproducts.json");
    }

    function services() {
        return{
            tile: "",
            getTitle: function () {
                return this.title;
            },
            setTitle: function (tit) {
                this.title = tit;
            }
        }
    }

})();