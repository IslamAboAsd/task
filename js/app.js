
var myApp = angular.module('myApp', [
    'ngRoute',
    'personController'
]);
myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/item1', {
                    templateUrl: 'partail/item1.html',
                    controller: 'ListController'
                })
                .when('/item2', {
                    templateUrl: 'partail/item2.html',
                    controller: 'DetailsController'
                })
                        .otherwise({
                            redirectTo:'item2'
                        });
    }]);