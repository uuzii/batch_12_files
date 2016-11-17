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

    leiaCtrl.$inject = ['service'];
    function leiaCtrl(service){
        var c2 = this;
        c2.sendEvent = send;

        function send(){
            service.setMessage(c2.message);
        }
    }
})();