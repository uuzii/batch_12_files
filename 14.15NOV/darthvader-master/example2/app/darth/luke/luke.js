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

    function lukeCtrl($scope){
        var c3 = this;
        c3.data = "nothing Here";
        $scope.$on('msg', function(evt, msg){
            c3.data = msg
        })
    }

})();