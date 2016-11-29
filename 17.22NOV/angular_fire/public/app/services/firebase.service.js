/**
 * Created by JOSE G RODRIGUEZ on 22/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('angularfire')
        .factory('Auth', Auth);

    Auth.$inject = ["$firebaseAuth"];
    function Auth($firebaseAuth) {
        return $firebaseAuth();
    }
})();