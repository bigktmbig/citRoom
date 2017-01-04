'use strict';

angular.module('myappApp')
.factory('Auth', function ($http, Client, $location, $rootScope, $cookieStore) {

    var currentUser = $cookieStore.get('currentUser') || {
        email: '',
        roles: ['anonymous'],
        accessToken: '',
        userId: null
    };

    $rootScope.currentUser = currentUser;

    function changeUser(user) {
        angular.extend(currentUser, user);
    }
    return {
        authorize: function(pesrmissions, roles) {
            var rs = false;

            if (roles === undefined) {
                roles = currentUser.roles;
            }

            if ('only' in pesrmissions) {
                var arr = roles.filter(function(val) {
                    return pesrmissions.only.indexOf(val) !== -1;
                });
                if (arr.length > 0) {
                    rs = true;
                }
            }

            if ('except' in pesrmissions) {
                var arr = roles.filter(function(val) {
                    return pesrmissions.except.indexOf(val) === -1;
                });
                if (arr.length > 0) {
                    rs = true;
                }
            }

            return rs;
        },
        isLoggedIn: function() {
            return currentUser.accessToken !== '';
        },
        register: function(email, password) {
            Client
            .create({
                email: email,
                password: password
            })
            .$promise;
        },
        setUser: function(user){
            changeUser(user);
        },
        logout: function(user){
            Client
            .logout()
            .$promise
            .then(function(response){
                $cookieStore.remove('currentUser');
                changeUser(user);
                $location.path('/login');
            }, function(err){
                console.log(err);
            });
        },
        user: currentUser
    };
});
