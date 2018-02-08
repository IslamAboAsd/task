var personController=angular.module("personController", []);
personController.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});
personController.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});
personController.controller('datCtrl', function($scope) {
    $scope.today = new Date();
});