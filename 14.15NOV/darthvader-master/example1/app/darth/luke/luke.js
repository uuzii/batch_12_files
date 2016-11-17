/**
 * Created by uriel.miranda on 19/10/2016.
 */
(function(){
    'use strict';

    var luke = {
        bindings:{
           data: "="
        },
        templateUrl: "./app/darth/luke/luke.html",
        controller: lukeCtrl
    };

    angular
        .module("myapp")
        .component("lukeSkywalker",luke);

    function lukeCtrl(){
        var c3 = this;

        c3.data = this.data;
        console.log(`Componente LukeSkywalker ${c3.data}`);
    }

})();