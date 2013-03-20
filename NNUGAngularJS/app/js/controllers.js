function TaskListCtrl($scope, Task) {
    
    $scope.tasks = Task.query();

    $scope.add = function() {
        $scope.tasks.push({ name: $scope.newTask });
        $scope.newTask = '';
    };
}

function TaskDetailCtrl($scope, $routeParams) {
    $scope.taskId = $routeParams.taskId;
}
