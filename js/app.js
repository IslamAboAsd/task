var myApp = angular.module("myApp", ["ngRoute", "personController"]);
myApp.config(function($routeProvider) {
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
    })
    .otherwise({
        redirectTo:"/"
    });
});