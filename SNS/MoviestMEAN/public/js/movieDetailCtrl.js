app.controller('MovieDetailCtrl', function($scope, $routeParams, $location, Movie) {
	var movieId = $routeParams['movieId'];
	// Promise 방식
	var movie = Movie.get({movieId:movieId}, function() {
		console.log(movie);
		$scope.movie = movie;
	});

	$scope.fbShare = function() {
		FB.ui({
			method: 'share',
			href: $location.absUrl(),
		}, function(response){
			console.log(response);
		});
	};

	$scope.pageHref = $location.absUrl();
});