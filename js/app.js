
var myApp = angular.module('myApp', [
    'ngRoute',
    'personController'
]);
myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/item1', {
                    templateUrl: 'partail/item1.html',
                    controller: 'DetailsController'
                })
                .when('/item2', {
                    templateUrl: 'partail/item2.html',
                    controller: 'ListController'
                })
                        .otherwise({
                            redirectTo:'item1'
                        });
    }]);