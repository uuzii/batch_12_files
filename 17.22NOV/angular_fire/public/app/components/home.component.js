/**
 * Created by JOSE G RODRIGUEZ on 22/11/2016.
 */
(function () {
    'use strict';

    var myHome = {
        template: "<button ng-click='$ctrl.logOut()'> Log Out </button>",
        controller: homeCtrl
    };

    angular
        .module('angularfire')
        .component('myHome', myHome);

    homeCtrl.$inject = ["$firebaseAuth"];
    function homeCtrl($firebaseAuth) {
        var home = this;

        home.auth = $firebaseAuth();
        home.logOut = logout;

        function logout() {
            home.auth.$signOut();
            window.location.replace('/');
        }
    }
})();