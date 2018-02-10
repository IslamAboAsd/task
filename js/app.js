var app = angular.module("app", ["ngRoute", "personController"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "partail/main.html",
        controller : "mainCtrl"

    })
    .when("/addEmployee", {
        templateUrl : "partail/addEmployee.html",
        controller : "addEmployeeCtrl"
    })
    
    .otherwise({
        redirectTo:"/addEmployee"
    });
});