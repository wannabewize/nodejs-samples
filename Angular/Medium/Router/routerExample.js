var app = angular.module('ExampleApp', []);

app.config(['$routeProvider', function config$routeProvider) {
    $routeProvider
        .when('/page1', {templateUrl:'page1.html', controller:PageController1})
        .when('/page2', {templateUrl:'page2.html', controller:PageController2});
}]);

function PageController1($scope) {
    $scope.title = 'Page1';
})
function PageController2($scope) {
    $scope.title = 'Page2';
});