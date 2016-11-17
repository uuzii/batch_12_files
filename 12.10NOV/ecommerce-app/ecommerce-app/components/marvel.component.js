(function () {
    'use strict';

    var commerce = {
        templateUrl: "./components/marvel.component.html",
        controller: commerceCtrl
    };

    var commerce2 = {
        templateUrl: "./components/marvel2.component.html",
        controller: commerceCtrl2
    };

    angular

        .module('ecommerce')
        .component("myHeroes", commerce)
        .component("myHeroes2", commerce2)

    commerceCtrl.$inject = ["apiEcommerce"];
    function commerceCtrl(apiEcommerce){
        var commerce = this;
        commerce.apiData = apiEcommerce.query();
    }

    commerceCtrl2.$inject = ["apiEcommerce2"];
    function commerceCtrl2(apiEcommerce2){
        var commerce2 = this;
        commerce2.apiData2 = apiEcommerce2.query();
    }



})();