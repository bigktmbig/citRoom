'use strict';

/**
 * @ngdoc service
 * @name myappApp.myService
 * @description
 * # myService
 * Service in the myappApp.
 */
 angular.module('myappApp')
 .factory('appServices', function(){
    return {
        filte_role : function(response, role){
            var totalItems = 0;
            var roles = new Array();
            var result = new Array();
            var users = {
                result: '',
                totalItems: 0
            };
            for (var i = 0; i < response.length; i++) {
                //get roles
                for (var j = 0; j < response[i].roles.length; j++) {
                 roles.push(response[i].roles[j].name);
             }
                //check roles
                if(roles.indexOf(role)>-1){
                    totalItems++;
                    result.push(response[i]);
                    roles = [];
                }
            }
            users = {
                result: result,
                totalItems: totalItems
            };
            return users;
        },
    };
})
