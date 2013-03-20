function TaskCtrl($scope) {
    $scope.tasks = [
        { "name": "Do stuff" }
    ];

    $scope.add = function() {
        $scope.tasks.push({ name: $scope.newTask });
        $scope.newTask = '';
    };
}