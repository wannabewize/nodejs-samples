var app = angular.module('ExampleApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/page1', {templateUrl:'page1.html', controller:PageController1})
        .when('/page2', {templateUrl:'page2.html', controller:PageController2})
        .otherwise({redirectTo:'/page1'});
}]);

function PageController1($scope) {
    $scope.title = 'Page1';
};
function PageController2($scope) {
    $scope.title = 'Page2';
    $scope.message = 'Welcome To Second Page';
};