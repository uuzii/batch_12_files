(function(){
    'use strict';

    angular
        .module("myapp",[])
        .controller("myCtrl", myCtrl)
        .controller("otherCtrl", otherCtrl);


    function myCtrl(){
        var mc = this;

        mc.name = "Nekro";
        mc.devf = [
            {name: "Nekro", role: "Sensei"},
            {name: "Diego", role: "Sensei"},
            {name: "Manuel",role: "Alumno"},
            {name: "Uzzi", role: "Alumno"}
        ]
    }

    function otherCtrl(){
        var other = this;

        other.saludo = function(){
            alert("Hello Devf");
        }
    }



})();



