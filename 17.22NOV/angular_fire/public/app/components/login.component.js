/**
 * Created by JOSE G RODRIGUEZ on 22/11/2016.
 */
(function () {
    'use strict';

    let config = {
        apiKey: "AIzaSyDTbJgUt6ISCnqj3UnMuABxF_k-w4F2AtE",
        authDomain: "angular-fire-50eba.firebaseapp.com",
        databaseURL: "https://angular-fire-50eba.firebaseio.com",
        storageBucket: "angular-fire-50eba.appspot.com",
        messagingSenderId: "430174983144"
    };
    firebase.initializeApp(config);

    let myApp = {
        templateUrl: './app/components/login.component.html',
        controller: ngCtrl
    };

    angular
        .module('angularfire')
        .component('myApp', myApp);

    ngCtrl.$inject = ["$firebaseAuth"];
    function ngCtrl($firebaseAuth) {
        let ng = this;

        ng.auth = $firebaseAuth();
        ng.login = login;

        function login(social) {
            ng.auth.$signInWithPopup(social)
                .then(function (firebaseUser){
                    window.location.replace("/#/home");
                    console.log('Signed in as: ' + firebaseUser.user.displayName);
                }).catch(function (error) {
                    console.log('Authentication failed', error);
            })
        }
    }
})();