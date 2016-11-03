var app = angular.module('TodoExample', []);


app.controller('TodoCtrl', function($scope) {
    $scope.todos = [{title:'todo1', done:false}];

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(item) {
            if ( ! item.done ) {
                count++;
            }
        });
        return count;
    };


    $scope.addTodo = function() {
        $scope.todos.push({title:$scope.newTodo, done:false});
        $scope.newTodo = '';
    };

    $scope.archive = function() {
        var todo = [];
        angular.forEach($scope.todos, function(item) {
            if ( ! item.done ) {
                todo.push(item);
            }
        });
        $scope.todos = todo;
    };
});
