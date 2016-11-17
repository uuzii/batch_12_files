/**
 * Created by uriel.miranda on 19/10/2016.
 */
(function(){
    'use strict';
    angular
        .module('myapp')
        .factory('service', services);

    function services(){
        return{
            message: 'Nothing Here...',
            getMessage: function(){
                return this.message;
            },
            setMessage: function(msg){
                this.message = msg;
            }

        }
    }

})();