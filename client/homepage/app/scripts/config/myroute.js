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
                        only: ['anonymous']
                    }
                }
            })

            .state('public.main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('public.login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .state('public.about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })

            // user routes mastering setting
            $stateProvider
            .state('homepage', {
                abstract: true,
                template: "<ui-view/>",
                data: {
                    permissions: {
                        only: ['member,manager,admin']
                    }
                }
            })
            .state('homepage.main', {
                url: '/homepage',
                templateUrl: 'views/homepage.html',
                controller: 'HomepageCtrl'
            })

            // For unmatched routes
            $urlRouterProvider.otherwise('/');
            // enable html5Mode for pushstate ('#'-less URLs)
            // $locationProvider.html5Mode(true);
            // $locationProvider.hashPrefix('!');
        }
        ]);
