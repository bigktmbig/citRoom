// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = "";

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
 var module = angular.module("lbServices", ['ngResource','services.config']).config(['configuration',function(configuration){
    urlBase = configuration.urlBase;
    authHeader = configuration.authHeader;
    urlBaseHost = getHost(urlBase) || location.host;
}]);
/**
 * @ngdoc object
 * @name lbServices.Application
 * @header lbServices.Application
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Application` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Application",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Applications/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Application#create
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Applications",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#createMany
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Applications",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#upsert
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Applications",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#exists
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Applications/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#findById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Applications/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#find
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Applications",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#findOne
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Applications/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#updateAll
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Applications/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#deleteById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Applications/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#count
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Applications/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#prototype$updateAttributes
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Applications/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Application#createChangeStream
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Applications/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Application#updateOrCreate
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Application#update
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Application#destroyById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Application#removeById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Application` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Application#modelName
    * @propertyOf lbServices.Application
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Application`.
    */
    R.modelName = "Application";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Client
 * @header lbServices.Client
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Client` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Client",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/clients/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$__findById__accessTokens
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$__updateById__accessTokens
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.sender.findById() instead.
        "prototype$__findById__sender": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/sender/:fk",
          method: "GET"
        },

        // INTERNAL. Use Client.sender.destroyById() instead.
        "prototype$__destroyById__sender": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/sender/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Client.sender.updateById() instead.
        "prototype$__updateById__sender": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/sender/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.receiver.findById() instead.
        "prototype$__findById__receiver": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/receiver/:fk",
          method: "GET"
        },

        // INTERNAL. Use Client.receiver.destroyById() instead.
        "prototype$__destroyById__receiver": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/receiver/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Client.receiver.updateById() instead.
        "prototype$__updateById__receiver": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/receiver/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.groups.findById() instead.
        "prototype$__findById__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/:fk",
          method: "GET"
        },

        // INTERNAL. Use Client.groups.destroyById() instead.
        "prototype$__destroyById__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Client.groups.updateById() instead.
        "prototype$__updateById__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.groups.link() instead.
        "prototype$__link__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.groups.unlink() instead.
        "prototype$__unlink__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Client.groups.exists() instead.
        "prototype$__exists__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$__get__accessTokens
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Queries accessTokens of Client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/clients/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$__create__accessTokens
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/clients/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$__delete__accessTokens
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/clients/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$__count__accessTokens
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Counts accessTokens of Client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/clients/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Client.sender() instead.
        "prototype$__get__sender": {
          isArray: true,
          url: urlBase + "/clients/:id/sender",
          method: "GET"
        },

        // INTERNAL. Use Client.sender.create() instead.
        "prototype$__create__sender": {
          url: urlBase + "/clients/:id/sender",
          method: "POST"
        },

        // INTERNAL. Use Client.sender.destroyAll() instead.
        "prototype$__delete__sender": {
          url: urlBase + "/clients/:id/sender",
          method: "DELETE"
        },

        // INTERNAL. Use Client.sender.count() instead.
        "prototype$__count__sender": {
          url: urlBase + "/clients/:id/sender/count",
          method: "GET"
        },

        // INTERNAL. Use Client.receiver() instead.
        "prototype$__get__receiver": {
          isArray: true,
          url: urlBase + "/clients/:id/receiver",
          method: "GET"
        },

        // INTERNAL. Use Client.receiver.create() instead.
        "prototype$__create__receiver": {
          url: urlBase + "/clients/:id/receiver",
          method: "POST"
        },

        // INTERNAL. Use Client.receiver.destroyAll() instead.
        "prototype$__delete__receiver": {
          url: urlBase + "/clients/:id/receiver",
          method: "DELETE"
        },

        // INTERNAL. Use Client.receiver.count() instead.
        "prototype$__count__receiver": {
          url: urlBase + "/clients/:id/receiver/count",
          method: "GET"
        },

        // INTERNAL. Use Client.groups() instead.
        "prototype$__get__groups": {
          isArray: true,
          url: urlBase + "/clients/:id/groups",
          method: "GET"
        },

        // INTERNAL. Use Client.groups.create() instead.
        "prototype$__create__groups": {
          url: urlBase + "/clients/:id/groups",
          method: "POST"
        },

        // INTERNAL. Use Client.groups.destroyAll() instead.
        "prototype$__delete__groups": {
          url: urlBase + "/clients/:id/groups",
          method: "DELETE"
        },

        // INTERNAL. Use Client.groups.count() instead.
        "prototype$__count__groups": {
          url: urlBase + "/clients/:id/groups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#create
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/clients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#createMany
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/clients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#upsert
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/clients",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#exists
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/clients/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#findById
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/clients/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#find
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/clients",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#findOne
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/clients/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#updateAll
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/clients/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#deleteById
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/clients/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#count
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/clients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$updateAttributes
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/clients/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#createChangeStream
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/clients/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#login
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/clients/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#logout
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/clients/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#confirm
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/clients/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#resetPassword
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/clients/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#currentUser
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Get the current user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "currentUser": {
          url: urlBase + "/clients/currentUser",
          method: "GET"
        },

        // INTERNAL. Use Group.clients.findById() instead.
        "::findById::Group::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.clients.destroyById() instead.
        "::destroyById::Group::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.clients.updateById() instead.
        "::updateById::Group::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.clients.link() instead.
        "::link::Group::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.clients.unlink() instead.
        "::unlink::Group::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.clients.exists() instead.
        "::exists::Group::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Group.clients() instead.
        "::get::Group::clients": {
          isArray: true,
          url: urlBase + "/groups/:id/clients",
          method: "GET"
        },

        // INTERNAL. Use Group.clients.create() instead.
        "::create::Group::clients": {
          url: urlBase + "/groups/:id/clients",
          method: "POST"
        },

        // INTERNAL. Use Group.clients.createMany() instead.
        "::createMany::Group::clients": {
          isArray: true,
          url: urlBase + "/groups/:id/clients",
          method: "POST"
        },

        // INTERNAL. Use Group.clients.destroyAll() instead.
        "::delete::Group::clients": {
          url: urlBase + "/groups/:id/clients",
          method: "DELETE"
        },

        // INTERNAL. Use Group.clients.count() instead.
        "::count::Group::clients": {
          url: urlBase + "/groups/:id/clients/count",
          method: "GET"
        },

        // INTERNAL. Use Conversation.sender() instead.
        "::get::Conversation::sender": {
          url: urlBase + "/conversations/:id/sender",
          method: "GET"
        },

        // INTERNAL. Use Conversation.receiver() instead.
        "::get::Conversation::receiver": {
          url: urlBase + "/conversations/:id/receiver",
          method: "GET"
        },

        // INTERNAL. Use ClientGroup.client() instead.
        "::get::ClientGroup::client": {
          url: urlBase + "/client_groups/:id/client",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#getCurrent
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/clients" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Client#updateOrCreate
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Client#update
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Client#destroyById
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Client#removeById
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Client#getCachedCurrent
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Client#login} or
         * {@link lbServices.Client#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Client instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Client#isAuthenticated
         * @methodOf lbServices.Client
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Client#getCurrentId
         * @methodOf lbServices.Client
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Client#modelName
    * @propertyOf lbServices.Client
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Client`.
    */
    R.modelName = "Client";

    /**
     * @ngdoc object
     * @name lbServices.Client.sender
     * @header lbServices.Client.sender
     * @object
     * @description
     *
     * The object `Client.sender` groups methods
     * manipulating `Conversation` instances related to `Client`.
     *
     * Call {@link lbServices.Client#sender Client.sender()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Client#sender
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Queries sender of Client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.sender = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::get::Client::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.sender#count
         * @methodOf lbServices.Client.sender
         *
         * @description
         *
         * Counts sender of Client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.sender.count = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::count::Client::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.sender#create
         * @methodOf lbServices.Client.sender
         *
         * @description
         *
         * Creates a new instance in sender of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.sender.create = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::create::Client::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.sender#createMany
         * @methodOf lbServices.Client.sender
         *
         * @description
         *
         * Creates a new instance in sender of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.sender.createMany = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::createMany::Client::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.sender#destroyAll
         * @methodOf lbServices.Client.sender
         *
         * @description
         *
         * Deletes all sender of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sender.destroyAll = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::delete::Client::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.sender#destroyById
         * @methodOf lbServices.Client.sender
         *
         * @description
         *
         * Delete a related item by id for sender.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sender
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sender.destroyById = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::destroyById::Client::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.sender#findById
         * @methodOf lbServices.Client.sender
         *
         * @description
         *
         * Find a related item by id for sender.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sender
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.sender.findById = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::findById::Client::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.sender#updateById
         * @methodOf lbServices.Client.sender
         *
         * @description
         *
         * Update a related item by id for sender.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sender
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.sender.updateById = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::updateById::Client::sender"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Client.receiver
     * @header lbServices.Client.receiver
     * @object
     * @description
     *
     * The object `Client.receiver` groups methods
     * manipulating `Conversation` instances related to `Client`.
     *
     * Call {@link lbServices.Client#receiver Client.receiver()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Client#receiver
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Queries receiver of Client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.receiver = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::get::Client::receiver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.receiver#count
         * @methodOf lbServices.Client.receiver
         *
         * @description
         *
         * Counts receiver of Client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.receiver.count = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::count::Client::receiver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.receiver#create
         * @methodOf lbServices.Client.receiver
         *
         * @description
         *
         * Creates a new instance in receiver of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.receiver.create = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::create::Client::receiver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.receiver#createMany
         * @methodOf lbServices.Client.receiver
         *
         * @description
         *
         * Creates a new instance in receiver of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.receiver.createMany = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::createMany::Client::receiver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.receiver#destroyAll
         * @methodOf lbServices.Client.receiver
         *
         * @description
         *
         * Deletes all receiver of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.receiver.destroyAll = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::delete::Client::receiver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.receiver#destroyById
         * @methodOf lbServices.Client.receiver
         *
         * @description
         *
         * Delete a related item by id for receiver.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for receiver
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.receiver.destroyById = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::destroyById::Client::receiver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.receiver#findById
         * @methodOf lbServices.Client.receiver
         *
         * @description
         *
         * Find a related item by id for receiver.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for receiver
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.receiver.findById = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::findById::Client::receiver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.receiver#updateById
         * @methodOf lbServices.Client.receiver
         *
         * @description
         *
         * Update a related item by id for receiver.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for receiver
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R.receiver.updateById = function() {
          var TargetResource = $injector.get("Conversation");
          var action = TargetResource["::updateById::Client::receiver"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Client.groups
     * @header lbServices.Client.groups
     * @object
     * @description
     *
     * The object `Client.groups` groups methods
     * manipulating `Group` instances related to `Client`.
     *
     * Call {@link lbServices.Client#groups Client.groups()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Client#groups
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Queries groups of Client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#count
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Counts groups of Client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.groups.count = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::count::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#create
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Creates a new instance in groups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.create = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::create::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#createMany
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Creates a new instance in groups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.createMany = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::createMany::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#destroyAll
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Deletes all groups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groups.destroyAll = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::delete::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#destroyById
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Delete a related item by id for groups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groups.destroyById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::destroyById::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#exists
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Check the existence of groups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.exists = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::exists::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#findById
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Find a related item by id for groups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.findById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::findById::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#link
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Add a related item by id for groups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.link = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::link::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#unlink
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Remove the groups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groups.unlink = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::unlink::Client::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client.groups#updateById
         * @methodOf lbServices.Client.groups
         *
         * @description
         *
         * Update a related item by id for groups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.updateById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::updateById::Client::groups"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Message
 * @header lbServices.Message
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Message` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Message",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/messages/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Message.group() instead.
        "prototype$__get__group": {
          url: urlBase + "/messages/:id/group",
          method: "GET"
        },

        // INTERNAL. Use Message.post() instead.
        "prototype$__get__post": {
          url: urlBase + "/messages/:id/post",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#create
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/messages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#createMany
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/messages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#upsert
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/messages",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#exists
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/messages/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#findById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/messages/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#find
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/messages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#findOne
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/messages/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#updateAll
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/messages/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#deleteById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/messages/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#count
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/messages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#prototype$updateAttributes
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/messages/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#createChangeStream
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/messages/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Post.messages.findById() instead.
        "::findById::Post::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/messages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.messages.destroyById() instead.
        "::destroyById::Post::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/messages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.messages.updateById() instead.
        "::updateById::Post::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/messages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.messages() instead.
        "::get::Post::messages": {
          isArray: true,
          url: urlBase + "/posts/:id/messages",
          method: "GET"
        },

        // INTERNAL. Use Post.messages.create() instead.
        "::create::Post::messages": {
          url: urlBase + "/posts/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Post.messages.createMany() instead.
        "::createMany::Post::messages": {
          isArray: true,
          url: urlBase + "/posts/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Post.messages.destroyAll() instead.
        "::delete::Post::messages": {
          url: urlBase + "/posts/:id/messages",
          method: "DELETE"
        },

        // INTERNAL. Use Post.messages.count() instead.
        "::count::Post::messages": {
          url: urlBase + "/posts/:id/messages/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Message#updateOrCreate
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Message#update
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Message#destroyById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Message#removeById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Message#modelName
    * @propertyOf lbServices.Message
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Message`.
    */
    R.modelName = "Message";


        /**
         * @ngdoc method
         * @name lbServices.Message#group
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Fetches belongsTo relation group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.group = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::Message::group"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Message#post
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Fetches belongsTo relation post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.post = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Message::post"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Group
 * @header lbServices.Group
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Group` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Group",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/groups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Group.clients.findById() instead.
        "prototype$__findById__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.clients.destroyById() instead.
        "prototype$__destroyById__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.clients.updateById() instead.
        "prototype$__updateById__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.clients.link() instead.
        "prototype$__link__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.clients.unlink() instead.
        "prototype$__unlink__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.clients.exists() instead.
        "prototype$__exists__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/clients/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Group.clients() instead.
        "prototype$__get__clients": {
          isArray: true,
          url: urlBase + "/groups/:id/clients",
          method: "GET"
        },

        // INTERNAL. Use Group.clients.create() instead.
        "prototype$__create__clients": {
          url: urlBase + "/groups/:id/clients",
          method: "POST"
        },

        // INTERNAL. Use Group.clients.destroyAll() instead.
        "prototype$__delete__clients": {
          url: urlBase + "/groups/:id/clients",
          method: "DELETE"
        },

        // INTERNAL. Use Group.clients.count() instead.
        "prototype$__count__clients": {
          url: urlBase + "/groups/:id/clients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#create
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#createMany
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#upsert
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/groups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#exists
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/groups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#findById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/groups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#find
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/groups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#findOne
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/groups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#updateAll
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/groups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#deleteById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/groups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#count
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/groups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#prototype$updateAttributes
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/groups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#createChangeStream
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/groups/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Client.groups.findById() instead.
        "::findById::Client::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/:fk",
          method: "GET"
        },

        // INTERNAL. Use Client.groups.destroyById() instead.
        "::destroyById::Client::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Client.groups.updateById() instead.
        "::updateById::Client::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.groups.link() instead.
        "::link::Client::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.groups.unlink() instead.
        "::unlink::Client::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Client.groups.exists() instead.
        "::exists::Client::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/groups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Client.groups() instead.
        "::get::Client::groups": {
          isArray: true,
          url: urlBase + "/clients/:id/groups",
          method: "GET"
        },

        // INTERNAL. Use Client.groups.create() instead.
        "::create::Client::groups": {
          url: urlBase + "/clients/:id/groups",
          method: "POST"
        },

        // INTERNAL. Use Client.groups.createMany() instead.
        "::createMany::Client::groups": {
          isArray: true,
          url: urlBase + "/clients/:id/groups",
          method: "POST"
        },

        // INTERNAL. Use Client.groups.destroyAll() instead.
        "::delete::Client::groups": {
          url: urlBase + "/clients/:id/groups",
          method: "DELETE"
        },

        // INTERNAL. Use Client.groups.count() instead.
        "::count::Client::groups": {
          url: urlBase + "/clients/:id/groups/count",
          method: "GET"
        },

        // INTERNAL. Use Message.group() instead.
        "::get::Message::group": {
          url: urlBase + "/messages/:id/group",
          method: "GET"
        },

        // INTERNAL. Use Post.group() instead.
        "::get::Post::group": {
          url: urlBase + "/posts/:id/group",
          method: "GET"
        },

        // INTERNAL. Use ClientGroup.group() instead.
        "::get::ClientGroup::group": {
          url: urlBase + "/client_groups/:id/group",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Group#updateOrCreate
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Group#update
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Group#destroyById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Group#removeById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Group#modelName
    * @propertyOf lbServices.Group
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Group`.
    */
    R.modelName = "Group";

    /**
     * @ngdoc object
     * @name lbServices.Group.clients
     * @header lbServices.Group.clients
     * @object
     * @description
     *
     * The object `Group.clients` groups methods
     * manipulating `Client` instances related to `Group`.
     *
     * Call {@link lbServices.Group#clients Group.clients()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Group#clients
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Queries clients of Group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.clients = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::get::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#count
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Counts clients of Group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.clients.count = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::count::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#create
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Creates a new instance in clients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.clients.create = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::create::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#createMany
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Creates a new instance in clients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.clients.createMany = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::createMany::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#destroyAll
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Deletes all clients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.clients.destroyAll = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::delete::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#destroyById
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Delete a related item by id for clients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.clients.destroyById = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::destroyById::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#exists
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Check the existence of clients relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.clients.exists = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::exists::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#findById
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Find a related item by id for clients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.clients.findById = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::findById::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#link
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Add a related item by id for clients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.clients.link = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::link::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#unlink
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Remove the clients relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.clients.unlink = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::unlink::Group::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.clients#updateById
         * @methodOf lbServices.Group.clients
         *
         * @description
         *
         * Update a related item by id for clients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.clients.updateById = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::updateById::Group::clients"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Post
 * @header lbServices.Post
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Post` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Post",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/posts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Post.group() instead.
        "prototype$__get__group": {
          url: urlBase + "/posts/:id/group",
          method: "GET"
        },

        // INTERNAL. Use Post.messages.findById() instead.
        "prototype$__findById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/messages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.messages.destroyById() instead.
        "prototype$__destroyById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/messages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.messages.updateById() instead.
        "prototype$__updateById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/messages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.messages() instead.
        "prototype$__get__messages": {
          isArray: true,
          url: urlBase + "/posts/:id/messages",
          method: "GET"
        },

        // INTERNAL. Use Post.messages.create() instead.
        "prototype$__create__messages": {
          url: urlBase + "/posts/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Post.messages.destroyAll() instead.
        "prototype$__delete__messages": {
          url: urlBase + "/posts/:id/messages",
          method: "DELETE"
        },

        // INTERNAL. Use Post.messages.count() instead.
        "prototype$__count__messages": {
          url: urlBase + "/posts/:id/messages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#create
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/posts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#createMany
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/posts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#upsert
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/posts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#exists
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/posts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#findById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/posts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#find
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/posts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#findOne
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/posts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#updateAll
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/posts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#deleteById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/posts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#count
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/posts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#prototype$updateAttributes
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/posts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#createChangeStream
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/posts/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Message.post() instead.
        "::get::Message::post": {
          url: urlBase + "/messages/:id/post",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Post#updateOrCreate
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Post#update
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Post#destroyById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Post#removeById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Post#modelName
    * @propertyOf lbServices.Post
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Post`.
    */
    R.modelName = "Post";


        /**
         * @ngdoc method
         * @name lbServices.Post#group
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.group = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::Post::group"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Post.messages
     * @header lbServices.Post.messages
     * @object
     * @description
     *
     * The object `Post.messages` groups methods
     * manipulating `Message` instances related to `Post`.
     *
     * Call {@link lbServices.Post#messages Post.messages()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Post#messages
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Queries messages of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::get::Post::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.messages#count
         * @methodOf lbServices.Post.messages
         *
         * @description
         *
         * Counts messages of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.messages.count = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::count::Post::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.messages#create
         * @methodOf lbServices.Post.messages
         *
         * @description
         *
         * Creates a new instance in messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.create = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::create::Post::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.messages#createMany
         * @methodOf lbServices.Post.messages
         *
         * @description
         *
         * Creates a new instance in messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.createMany = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::createMany::Post::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.messages#destroyAll
         * @methodOf lbServices.Post.messages
         *
         * @description
         *
         * Deletes all messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.messages.destroyAll = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::delete::Post::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.messages#destroyById
         * @methodOf lbServices.Post.messages
         *
         * @description
         *
         * Delete a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.messages.destroyById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::destroyById::Post::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.messages#findById
         * @methodOf lbServices.Post.messages
         *
         * @description
         *
         * Find a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.findById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::findById::Post::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.messages#updateById
         * @methodOf lbServices.Post.messages
         *
         * @description
         *
         * Update a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.updateById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::updateById::Post::messages"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Conversation
 * @header lbServices.Conversation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Conversation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Conversation",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/conversations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Conversation.sender() instead.
        "prototype$__get__sender": {
          url: urlBase + "/conversations/:id/sender",
          method: "GET"
        },

        // INTERNAL. Use Conversation.receiver() instead.
        "prototype$__get__receiver": {
          url: urlBase + "/conversations/:id/receiver",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#create
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/conversations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#createMany
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/conversations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#upsert
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/conversations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#exists
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/conversations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#findById
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/conversations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#find
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/conversations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#findOne
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/conversations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#updateAll
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/conversations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#deleteById
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/conversations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#count
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/conversations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#prototype$updateAttributes
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/conversations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Conversation#createChangeStream
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/conversations/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Client.sender.findById() instead.
        "::findById::Client::sender": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/sender/:fk",
          method: "GET"
        },

        // INTERNAL. Use Client.sender.destroyById() instead.
        "::destroyById::Client::sender": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/sender/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Client.sender.updateById() instead.
        "::updateById::Client::sender": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/sender/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.receiver.findById() instead.
        "::findById::Client::receiver": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/receiver/:fk",
          method: "GET"
        },

        // INTERNAL. Use Client.receiver.destroyById() instead.
        "::destroyById::Client::receiver": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/receiver/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Client.receiver.updateById() instead.
        "::updateById::Client::receiver": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/clients/:id/receiver/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Client.sender() instead.
        "::get::Client::sender": {
          isArray: true,
          url: urlBase + "/clients/:id/sender",
          method: "GET"
        },

        // INTERNAL. Use Client.sender.create() instead.
        "::create::Client::sender": {
          url: urlBase + "/clients/:id/sender",
          method: "POST"
        },

        // INTERNAL. Use Client.sender.createMany() instead.
        "::createMany::Client::sender": {
          isArray: true,
          url: urlBase + "/clients/:id/sender",
          method: "POST"
        },

        // INTERNAL. Use Client.sender.destroyAll() instead.
        "::delete::Client::sender": {
          url: urlBase + "/clients/:id/sender",
          method: "DELETE"
        },

        // INTERNAL. Use Client.sender.count() instead.
        "::count::Client::sender": {
          url: urlBase + "/clients/:id/sender/count",
          method: "GET"
        },

        // INTERNAL. Use Client.receiver() instead.
        "::get::Client::receiver": {
          isArray: true,
          url: urlBase + "/clients/:id/receiver",
          method: "GET"
        },

        // INTERNAL. Use Client.receiver.create() instead.
        "::create::Client::receiver": {
          url: urlBase + "/clients/:id/receiver",
          method: "POST"
        },

        // INTERNAL. Use Client.receiver.createMany() instead.
        "::createMany::Client::receiver": {
          isArray: true,
          url: urlBase + "/clients/:id/receiver",
          method: "POST"
        },

        // INTERNAL. Use Client.receiver.destroyAll() instead.
        "::delete::Client::receiver": {
          url: urlBase + "/clients/:id/receiver",
          method: "DELETE"
        },

        // INTERNAL. Use Client.receiver.count() instead.
        "::count::Client::receiver": {
          url: urlBase + "/clients/:id/receiver/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Conversation#updateOrCreate
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Conversation#update
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Conversation#destroyById
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Conversation#removeById
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Conversation` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Conversation#modelName
    * @propertyOf lbServices.Conversation
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Conversation`.
    */
    R.modelName = "Conversation";


        /**
         * @ngdoc method
         * @name lbServices.Conversation#sender
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Fetches belongsTo relation sender.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.sender = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::get::Conversation::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Conversation#receiver
         * @methodOf lbServices.Conversation
         *
         * @description
         *
         * Fetches belongsTo relation receiver.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.receiver = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::get::Conversation::receiver"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ClientGroup
 * @header lbServices.ClientGroup
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ClientGroup` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ClientGroup",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/client_groups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ClientGroup.group() instead.
        "prototype$__get__group": {
          url: urlBase + "/client_groups/:id/group",
          method: "GET"
        },

        // INTERNAL. Use ClientGroup.client() instead.
        "prototype$__get__client": {
          url: urlBase + "/client_groups/:id/client",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#create
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/client_groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#createMany
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/client_groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#upsert
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/client_groups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#exists
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/client_groups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#findById
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/client_groups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#find
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/client_groups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#findOne
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/client_groups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#updateAll
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/client_groups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#deleteById
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/client_groups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#count
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/client_groups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#prototype$updateAttributes
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/client_groups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#createChangeStream
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/client_groups/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#updateOrCreate
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#update
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#destroyById
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#removeById
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ClientGroup` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ClientGroup#modelName
    * @propertyOf lbServices.ClientGroup
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ClientGroup`.
    */
    R.modelName = "ClientGroup";


        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#group
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Fetches belongsTo relation group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.group = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::ClientGroup::group"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ClientGroup#client
         * @methodOf lbServices.ClientGroup
         *
         * @description
         *
         * Fetches belongsTo relation client.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R.client = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::get::ClientGroup::client"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
