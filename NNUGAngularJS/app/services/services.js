angular.module('taskmanagerServices', ['ngResource']).
    factory('Task', function($resource) {
        return $resource('/api/task/:taskId', { taskId: '@id'}, {
            query: { method: 'GET', params: { taskId: '' }, isArray: true }
        });
    });