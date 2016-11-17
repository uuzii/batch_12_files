
(function(){
    'use strict';

    angular
        .module("starwars",["ngResource"])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/pokemon',{
                template: `<star-wars category="'pokemon'" ></star-wars>`
            })
            .when('/type',{
                template: `<star-wars category="'type'" ></star-wars>`
            })
            .when('/ability',{
                template: `<star-wars category="'ability'" ></star-wars>`
            })
            .otherwise({
                redirectTo: '/'
            })
    }
})();