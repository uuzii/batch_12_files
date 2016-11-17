/**
 * Created by urielmiranda on 07/11/16.
 */
(function(){
    'use strict';

    var heroes = {
        templateUrl:"./components/character.component.html",
        controller: marvelCtrl
    };

    angular
        .module("marvel")
        .component("myHeroes", heroes);


    marvelCtrl.$inject  = ["apiMarvel"];
    function marvelCtrl(apiMarvel){
        var hero = this;

        hero.characters = null;
        hero.apiData = apiMarvel.get()
            .$promise.then(function(response){
                hero.characters = response.data.results;
            });


    }



})();
