const app = angular.module('EmployeeApp', ['ngRoute']);
app.config(function($routeProvider) {
   $routeProvider
       .when('/employees', {templateUrl:'employees.html', controller:'EmployeeListCtrl'})
       .when('/employees/:emp-no', {templateUrl:'emploeeDetail.html', controller:'EmployeeDetailCtrl'})
       .otherwise({redirectTo:'/employees'});
});
});