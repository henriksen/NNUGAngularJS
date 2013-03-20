angular.module('taskmanager', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/tasks', { templateUrl: 'app/partials/task-list.html', controller: TaskListCtrl }).
            when('/tasks/:taskId', { templateUrl: 'app/partials/task-detail.html', controller: TaskDetailCtrl }).
            otherwise({ redirectTo: '/tasks' });
    }]);
