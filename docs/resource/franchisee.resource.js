'use strict';

angular.module('selectDemo').factory('Franchisee', FranchiseeAppResource);
FranchiseeAppResource.$inject = ['$resource'];
function FranchiseeAppResource($resource) {
    return $resource('/api/franchisee/:franchisee_id', {}, {
        options: {method: 'OPTIONS', params: {}},
        get: {method: 'GET', params: {franchisee_id: 0}},
        query: {method: 'GET', params: {}, isArray: true},
        update: {method: 'PUT', params: {franchisee_id: "@id"}},
        delete: {method: 'DELETE', params: {franchisee_id: "@id"}}
    });
}