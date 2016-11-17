/**
 * Created by urielmiranda on 01/11/16.
 */
(function(){
    'use strict';

    var helloComponent = {
        templateUrl: "hello.html",
        controller: helloCtrl
    };


    angular
        .module("myComp",[])
        .component("helloWorld", helloComponent);


    function helloCtrl(){
        var hello = this;

        hello.name = "Miranda";
    }



})();