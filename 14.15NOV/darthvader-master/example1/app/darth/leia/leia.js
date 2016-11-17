/**
 * Created by uriel.miranda on 19/10/2016.
 */
(function(){
    'use strict';

    var leia = {
        bindings:{
            message: "="
        },
        templateUrl: "./app/darth/leia/leia.html",
        controller: leiaCtrl
    };
    angular
        .module("myapp")
        .component("princessLeia", leia);


    function leiaCtrl(){
        var c2 = this;
        c2.data = this.message;
        console.log(`Componente Leia ${c2.message}`);

    }
})();