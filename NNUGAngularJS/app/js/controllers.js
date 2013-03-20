function TaskListCtrl($scope, $http) {
    $http.get("/api/task").success(function(data) {
        $scope.tasks = data;
    });

    $scope.add = function() {
        $scope.tasks.push({ name: $scope.newTask });
        $scope.newTask = '';
    };
}

function TaskDetailCtrl($scope, $routeParams) {
    $scope.taskId = $routeParams.taskId;
}
