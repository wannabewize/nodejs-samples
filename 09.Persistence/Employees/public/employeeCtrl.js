app.controller('EmployeeListCtrl', function($scope, $http) {
   $http.get('/employees').then( results => {
      console.log('/employees result : ', results);
   }, error => {
      console.log('/employees error : ', error.message);
   });
});