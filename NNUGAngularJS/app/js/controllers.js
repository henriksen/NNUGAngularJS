function TaskListCtrl($scope, Task) {
    $scope.tasks = Task.query();

    $scope.add = function () {
        Task.save({ name: $scope.newTask });
        $scope.tasks.push({ name: $scope.newTask });
        $scope.newTask = '';
    };
    
    $scope.finishIt = function(task) {
        task.$save();
    };
}

function TaskDetailCtrl($scope, $routeParams, Task) {
    $scope.task = Task.get({ taskId : $routeParams.taskId});
}

