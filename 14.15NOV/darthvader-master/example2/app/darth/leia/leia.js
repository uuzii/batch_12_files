/**
 * Created by uriel.miranda on 19/10/2016.
 */
(function(){
    'use strict';

    var leia = {
        templateUrl: "./app/darth/leia/leia.html",
        controller: leiaCtrl
    };
    angular
        .module("myapp")
        .component("princessLeia", leia);


    function leiaCtrl($scope){
        var c2 = this;
        c2.sendEvent = send;

        function send(){
            $scope.$parent.$broadcast('msg', c2.message);
        }
    }
})();