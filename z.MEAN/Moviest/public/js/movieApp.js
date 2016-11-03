var app = angular.module('MovieApp', ['ngRoute', 'ngResource']);

app.factory('Movie', function($resource) {
    var Movie = $resource('/movies/:movieId', {}, {post : { method:'POST'}, put : { method : 'PUT'}} );
    return Movie;
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/movies', {templateUrl:'partial/movieList.html', controller:'MovieListCtrl'})
        .when('/movies/:movieId', {templateUrl:'partial/movieDetail.html', controller:'MovieDetailCtrl'})
        .otherwise({redirectTo:'/movies'});
}]);

app.controller('MovieListCtrl', function($scope, $window, Movie) {
    function resolveMovieList() {
        Movie.get({}, function(response) {
            console.log(response.data);
            $scope.movies = response.data;
        });
    }

    resolveMovieList();

    // 초기 데이터
    $scope.newMovie = { title:'새 영화 제목', director:'새 영화 감독', year:2000, synopsis:'새 영화 줄거리'};

    $scope.addNewMovie = function(movie) {
        // save는 post
        Movie.save(movie, function(response) {
            console.log(response);
            resolveMovieList();
        }, function(err) {
            $window.alert('Error : ' + err.message);
        });
    };
});

app.controller('MovieDetailCtrl', function($scope, $routeParams, Movie) {
    var movieId = $routeParams['movieId'];
    // Promise 방식
    var movie = Movie.get({movieId:movieId}, function() {
        console.log(movie);
        $scope.movie = movie;
    });
});