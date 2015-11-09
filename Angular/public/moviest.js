'use strict';

var moviestApp = angular.module('moviestApp', ['ngRoute', 'MovieControllers']);

moviestApp.config(['$routeProvider',
   function ($routeProvider) {
      $routeProvider.
         when('/movies', {
            templateUrl: 'moviest.html',
            controller: 'MovieListController'
         }).
         when('/movies/:movieID', {
            templateUrl: 'movieDetail.html',
            controller: 'MovieDetailController'
         }).
         otherwise({
            redirectTo: '/movies'
         });
   }]);
   
var movieControllers = angular.module('MovieControllers', []);   

movieControllers.controller('MovieListController', function ($scope, $http) {
   $scope.title = 'Moviest';
   $scope.orderProp = 'title';
   $http.get('/movies').success(function (results) {
      $scope.movies = results.movies;
   });
});

movieControllers.controller('MovieDetailController', function ($scope, $routeParams, $http) {
   $scope.title = 'Movie Detail';
   $scope.movieID = $routeParams.movieID;
});