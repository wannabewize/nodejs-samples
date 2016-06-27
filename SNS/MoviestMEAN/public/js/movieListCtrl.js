app.controller('MovieListCtrl', function($scope, $window, Movie, FBService) {
	function resolveMovieList() {
		Movie.get({}, function(response) {
			console.log(response.data);
			$scope.movies = response.data;
		});
	}

	resolveMovieList();

	// 초기 데이터
	$scope.newMovie = { title:'새 영화 제목', director:'새 영화 감독', year:2000, synopsis:'새 영화 줄거리'};

	$scope.addNewMovie = function(newMovie) {
		// 로그인 상태 검사
		FBService.isLoggedIn(function loggedIn(response){
			// 로그인 된 상태라면 영화 등록
			saveNewMovie(newMovie);
		}, function notYet(){
			FBService.showLoginDialog(function loggedIn(response) {
				// 로그인 성공 후 영화 등록
				saveNewMovie(newMovie);
			});
		});
	};

	function saveNewMovie(movie) {
		Movie.save(movie, function(response) {
			console.log(response);
			resolveMovieList();
		}, function(err) {
			$window.alert('Error : ' + err.message);
		});
	}
});

