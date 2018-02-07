
var myApp = angular.module('myApp', [
    'ngRoute',
    'personController'
]);
myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/item', {
                    templateUrl: 'partail/item1.html',
                    controller: 'ListController'
                })
                .when('/items', {
                    templateUrl: 'partail/item2.html',
                    controller: 'DetailsController'
                })
                        .otherwise({
                            redirectTo:'item'
                        });
    }]);