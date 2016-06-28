var app = angular.module('MoviestApp', ['ngResource']);

app.factory('Movie', function($resource) {
    var Movie = $resource('/movies/:movieId', {}, {post : { method:'POST'}, put : { method : 'PUT'}} );
    return Movie;
});

app.controller('DefaultCtrl', function($scope, $http, Movie){
    $scope.movies = [];

    function resolveMovieList() {
        Movie.get({}, function(response) {
            console.log(response.data);
            $scope.movies = response.data;
        });
    }

    resolveMovieList();

    // 새 영화 추가
    $scope.addNewMovie = function(movie) {
        Movie.save(movie, function(response) {
            console.log(response);
            resolveMovieList();
        }, function(err) {
            console.log('Error : ', err);
        });
    };

    $scope.login = function() {
        FB.login(function(response) {
            console.log(response);
            if ( response.status == 'connected' ) {
                var token = response.authResponse.accessToken;
                $http.post('/auth/facebook/token', {access_token:token}).then(function(response){
                    console.log('Login success : ', response);
                }, function(error){
                    console.log('Login error : ', error);
                });
            }
        }, {scope:'email, public_profile'});
    }

    $scope.logout = function() {
        FB.logout(function(response) {
            $http.delete('/logout').then(function(response){
                console.log('Logout success : ', response);
            }, function(error){
                console.log('Logout error : ', error);
            });
        });
    };

    $scope.onLoginHandle = function() {
        // 서버에 로그인. access_token 으로 토큰 전달
        $http.post('/auth/facebook/token', {access_token:'1234'});
    }

    $scope.checkLoginStatus = function() {
        FB.getLoginStatus(function(response) {
            switch ( response.status ) {
                case 'connected':
                    $scope.loginStatus = '페북 로그인, 앱 로그인';
                    break;
                case 'not_authorized':
                    $scope.loginStatus = '페북 로그인, 앱 로그인 안됨';
                    break;
                case 'unknown':
                    $scope.loginStatus = '페북 로그인 안됨';
                    break;
                    break;
                    $scope.loginStatus = 'WTH';
            }
            console.log(JSON.stringify(response));
        });
    };
});