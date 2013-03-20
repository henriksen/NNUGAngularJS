function TaskListCtrl($scope, Task) {
    
    $scope.tasks = Task.query();

    $scope.add = function () {
        var task = { name: $scope.newTask, done: false };
        Task.save(task);
        $scope.tasks.push(task);
        $scope.newTask = '';
    };
}

function TaskDetailCtrl($scope, $routeParams, Task) {
    $scope.task = Task.get({ taskId: $routeParams.taskId });
}
