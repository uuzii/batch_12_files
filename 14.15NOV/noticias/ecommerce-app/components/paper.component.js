(function () {
    'use strict';

    var noticias = {
        templateUrl: "./components/paper.component.html",
        controller: newsCtrl,
        controller: tituloCtrl
    };

    angular
        .module('news')
        .component("myPaper", noticias)

    newsCtrl.$inject = ["apiNews"];
    function newsCtrl(apiNews){
        var noticias = this;
        noticias.apiData = apiNews.query();
    }

    tituloCtrl.$inject = ["service"];
    function tituloCtrl(service) {
        var b = this;
        b.data = getTitle;

        function getTitle() {
            return service.getTitle();
        }

    }

})();