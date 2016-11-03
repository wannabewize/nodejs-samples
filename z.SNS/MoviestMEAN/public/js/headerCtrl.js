app.controller('HeaderCtrl', function($scope, $http) {
	$scope.checkLoginState = function() {
		FB.getLoginStatus(function(response) {
			console.log(JSON.stringify(response));
		});
	};

	$scope.login = function(){
		$scope.checkLoginState();
		$scope.loginToServer();
	};

	$scope.logout = function() {
		FB.logout(function(response) {
			console.log('Logout : ', response);
		});
	};

	$scope.register = function() {
		console.log('Register');
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				var accessToken = response.authResponse.accessToken;
				registerUser(accessToken);
			}
		});
		return;

		FB.getLoginStatus(function(response) {
			// 페북 로그인 안함
			if ( response.status == 'unknown' ) {
				FBService.showLoginDialog(function loggedIn(authResponse) {
					var accessToken = authResponse.accessToken;
					registerUser(accessToken);
				});
			}
			else if ( response.status == 'not_authorized') {
				// 페북 로그인 - 앱 등록 안함
				var accessToken = '';
				registerUser(accessToken);
			}
		});
	};

	$scope.loginToServer = function() {
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				var accessToken = response.authResponse.accessToken;
				$http.post('/login', {access_token : accessToken}).then(function(){
					console.log('Logn Success');
				}, function(err) {
					console.log('Error');
				});
			}
		});
	};

	// 사용자 등록
	function registerUser(accessToken) {
		$http.post('/register', {access_token:accessToken}).then(function(response) {
			console.log('register user : ', response);
		}, function(error) {
			console.log('register user error : ', error);
		});
	}
});