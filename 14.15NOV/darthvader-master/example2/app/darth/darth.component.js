/**
 * Created by uriel.miranda on 19/10/2016.
 */
(function(){
    'use strict';

    var darth = {
        templateUrl: "./app/darth/darth.component.html",
        controller: darthCtrl
    };

    angular
        .module("myapp")
        .component("darthVader",darth);

    function darthCtrl(){
        var c1 = this;

    }

})();