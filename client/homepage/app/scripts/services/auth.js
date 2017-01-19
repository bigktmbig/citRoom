'use strict';

angular.module('myappApp')
.factory('Auth', function ($http, Client, $location, $rootScope, $cookieStore, $q, $state, $socket) {

    var currentUser = $cookieStore.get('currentUser') || {
        name: '',
        email: '',
        roles: ['anonymous'],
        accessToken: '',
        userId: null
    };

    $rootScope.currentUser = currentUser;

    function changeUser(user) {
        angular.extend(currentUser, user);
    }
    function changeOnOff(state) {
        var def = $q.defer();
        Client
        .prototype$updateAttributes({
            id: currentUser.userId,
            onOff: state,
        })
        .$promise
        .then(function(response){
            def.resolve(response);
        }, function(err){
            def.reject(err);
        });
        return def.promise;
    };
    function logout(user) {
        Client
        .logout()
        .$promise
        .then(function(response){
            $cookieStore.remove('currentUser');
            changeUser(user);
            $socket.removeAllListeners('group chat message');
            $state.go('public.login', { reload: true, notify: false });
            //$location.path('/login');
        }, function(err){
            console.log(err);
        });
    };
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
            var name = email.split("@")[0];
            Client
            .create({
                name: name,
                email: email,
                password: password
            })
            .$promise;
        },
        setUser: function(user){
            changeUser(user);
        },
        changeOnOff: function(state, userId){
            changeOnOff(state).then(function (data) {
                if(state == true){
                    if (data && data.onOff == true) {
                        //$location.path('/our-house');
                        $state.go('homepage.main', { reload: true, notify: false });
                        alertify.log('You are onlining');
                    }
                }else {
                    if (data && data.onOff == false) {
                        var user = {
                            name: '',
                            email: '',
                            roles: ['anonymous'],
                            accessToken: '',
                            userId: null
                        };
                        logout(user);
                        alertify.log('You are offlining');
                    }
                }
            }, function(reason) {
                console.log(reason);
                if(state == true){
                    $location.path('/login');
                    alertify.error('Login failed');
                }else {
                    //$state.go('homepage.main', {}, { reload: true, location: true, notify: false });
                    $location.path('/our-house');
                    alertify.error('Logout failed');
                }
            });
        },
        logout: function(user){
            logout(user);
        },
        user: currentUser
    };
});
