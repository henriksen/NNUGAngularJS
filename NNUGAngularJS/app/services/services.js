angular.module('taskmanagerServices', ['ngResource']).
    factory('Task', function($resource) {
        return $resource('/api/task/:taskId', {}, {
            query: { method: 'GET', params: { taskId: 'tasks' }, isArray: true }
        });
    });