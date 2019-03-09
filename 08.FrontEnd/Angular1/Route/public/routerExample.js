var app = angular.module('ExampleApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/page1', {templateUrl:'/public/page1.html', controller:PageController1})
        .when('/page2', {templateUrl:'/public/page2.html', controller:PageController2})
        .otherwise({redirectTo:'/public/page1'});
}]);

function PageController1($scope) {
    $scope.title = 'Page1';
};
function PageController2($scope) {
    $scope.title = 'Page2';
    $scope.message = 'Welcome To Second Page';
};