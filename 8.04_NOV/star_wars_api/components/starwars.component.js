/**
 * Created by urielmiranda on 03/11/16.
 */
(function(){
    'use strict';

    var starWars = {
        bindings: {
          category: "="
        },
        templateUrl: "./components/star.html",
        controller: starCtrl
    };

    angular
        .module("starwars")
        .component("starWars",starWars);

    starCtrl.$inject = ["apistar"];
    function starCtrl(apistar){
        var star = this;

        star.characters = null;
        star.apiData = apistar.get({
            category: star.category
        })
            .$promise.then(function(response){
                star.characters = response.results;
        })
    }

})();