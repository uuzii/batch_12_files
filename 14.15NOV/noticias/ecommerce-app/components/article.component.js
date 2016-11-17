/**
 * Created by Uzi on 17/11/2016.
 */
(function () {
    'use strict';

    var noticias2 = {
        templateUrl: "./components/article.component.html",
        controller: newsCtrl2,
        controller: titleCtrl
    };

    angular
        .module('news')
        .component("myArticle", noticias2)

    newsCtrl2.$inject = ["apiNews2"];
    function newsCtrl2(apiNews2){
        var noticias2 = this;
        noticias2.apiData = apiNews2.query();
    }

    titleCtrl.$inject = ["service"];
    function titleCtrl(service) {
        var a = this;
        a.sendTitle = send;
        
        function send() {
            service.setTitle(a.title);
        }
    }

})();