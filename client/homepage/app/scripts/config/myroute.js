'use strict';

/**
 * @ngdoc function
 * @description
 * Myroute of the myappApp
 */
 angular.module('myappApp')
 .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

            // Public routes
            $stateProvider
            .state('public', {
                abstract: true,
                template: "<ui-view/>",
                data: {
                    permissions: {
                        only: ['anonymous','member','manager','admin','big']
                    }
                }
            })

            .state('public.main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                data: {
                    permissions: {
                        only: ['anonymous']
                    }
                }
            })
            .state('public.about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .state('public.login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                data: {
                    permissions: {
                        only: ['anonymous']
                    }
                }
            })
            .state('public.register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                data: {
                    permissions: {
                        only: ['anonymous']
                    }
                }
            })

            // user routes mastering setting
            $stateProvider
            .state('homepage', {
                abstract: true,
                template: "<ui-view/>",
                data: {
                    permissions: {
                        only: ['member','manager','admin','big']
                    }
                }
            })
            .state('homepage.main', {
                url: '/homepage',
                templateUrl: 'views/homepage.html',
                controller: 'HomepageCtrl'
            })
            .state('homepage.profile', {
                url: '/profile',
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })

            // For unmatched routes
            $urlRouterProvider.otherwise('/');
            // $locationProvider.html5Mode({
            //     enabled: true,
            //     requireBase: false
            // });
            // enable html5Mode for pushstate ('#'-less URLs)
            // $locationProvider.html5Mode(true);
            // $locationProvider.hashPrefix('!');
        }
        ]);
 