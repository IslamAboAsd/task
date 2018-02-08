var myApp = angular.module("myApp", ["ngRoute", "personController"]);
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partail/main.html",
    })
    .when("/london", {
        templateUrl : "partail/london.html",
        controller : "londonCtrl"
    })
    .when("/paris", {
        templateUrl : "partail/paris.html",
        controller : "parisCtrl"
    })
    .otherwise({
        redirectTo:"/"
    });
});