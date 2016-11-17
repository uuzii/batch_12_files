/**
 * Created by uriel.miranda on 19/10/2016.
 */
(function(){
    'use strict';

    var luke = {
        templateUrl: "./app/darth/luke/luke.html",
        controller: lukeCtrl
    };

    angular
        .module("myapp")
        .component("lukeSkywalker",luke);

    lukeCtrl.$inject = ['service'];
    function lukeCtrl(service){
        var c3 = this;
        c3.data = getMessage;

        function getMessage(){
            return service.getMessage();
        }

    }

})();