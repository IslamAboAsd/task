var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partail/main.htm",
    })
    .when("/london", {
        templateUrl : "partail/london.htm",
        controller : "londonCtrl"
    })
    .when("/paris", {
        templateUrl : "partail/paris.htm",
        controller : "parisCtrl"
    });
});