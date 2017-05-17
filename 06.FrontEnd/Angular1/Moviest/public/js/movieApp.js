 var app = angular.module('MovieApp', ['ngRoute']);

 app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/movies', {templateUrl:'public/partial/movieList.html', controller:MovieListCtrl})
		.when('/movies/:movieId', {templateUrl:'public/partial/movieDetail.html', controller:MovieDetailCtrl})
		.otherwise({redirectTo:'/movies'});
 }]);

 function MovieListCtrl($scope){
	$scope.movies =  [{title:'movie1'}, {title:'movie2'}, {title:'movie3'}, {title:'movie4'}, {title:'movie5'}];
 };


 function MovieDetailCtrl($scope) {
	 $scope.title = '영화 상세 정보';
	$scope.synopsis = '대략적인 줄거리';
 };