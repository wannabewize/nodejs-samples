var app = angular.module('MovieApp', ['ngRoute']);

app.factory('movieApi', function($http){
    var service = {};
    var url = 'http://localshot:3000';

    service.getMovieList = function() {
        return $http.get(url + '/movies')
    };
    return service;
});

app.config(['$routeProvider' function($routeProvider) {
    $routeProvider
        .when('/movies' {templateUrl:'movieList.html', controller:MovieListCtrl})
        .otherwise({redirectTo:'/movies'});
}]);