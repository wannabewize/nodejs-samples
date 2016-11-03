var app = angular.module('MovieApp', ['ngRoute', 'ngResource']);

const scope = 'public_profile, email, user_friends, user_posts, user_photos, publish_actions';

app.factory('Movie', function($resource) {
    var Movie = $resource('/movies/:movieId', {}, {post : { method:'POST'}, put : { method : 'PUT'}} );
    return Movie;
});

app.factory('FBService', function() {
    var service = {};
    service.isLoggedIn = function(loggedIn, notYet) {
        FB.getLoginStatus(function(response) {
            if ( response.status == 'connected') {
                loggedIn(response.authResponse);
            }
            else {
                notYet();
            }
        });
    };

    service.showLoginDialog = function(loggedIn) {
        FB.login(function(response) {
            if ( response.status == 'connected' && loggedIn ) {
                loggedIn(response.authResponse);
            }
        }, {scope: scope});
    };
    return service;
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/movies', {templateUrl:'partial/movieList.html', controller:'MovieListCtrl'})
        .when('/movies/:movieId', {templateUrl:'partial/movieDetail.html', controller:'MovieDetailCtrl'})
        .otherwise({redirectTo:'/movies'});
}]);



