var app = angular.module('MoviestApp', []);

app.controller('DefaultCtrl', function($scope){
    $scope.movies = [{"title":"아바타", "director":"제임스 카메론", "year":2009, "synopsis":"인류의 마지막 희망, 행성 판도라!"},
        {"title":"스타워즈", "director":"조지 루카스", "year":1977, "synopsis":"평화롭던 은하계"}];

    // 새 영화 추가
    $scope.addNewMovie = function(movie) {
        // 로그인 상태 검사
        FB.getLoginStatus(function (response) {
            if (response.status == 'connected') {
                saveNewMovie(movie);
            }
            else {
                FB.login(function(response) {
                    if ( response.status == 'connected' ) {
                        saveNewMovie(movie);
                    }
                }, {scope: 'public_profile, email'});
            }
        });
    };
    function saveNewMovie(movie) {
        $scope.movies.push(movie);
    }

    $scope.logout = function() {
        FB.logout(function(response) {
            console.log('Logout : ', response);
        });
    };

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