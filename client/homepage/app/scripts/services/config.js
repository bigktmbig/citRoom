'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    urlBase: 'http://localhost:3000/api',
    authHeader: 'authorization',
    url: 'http://localhost:9000/#/'
  });