var personController=angular.module("personController", []);
personController.controller('addEmployeeCtrl', function($scope) {
    $scope.firstname = "John";
    $scope.lastname = "Doe";    
});
personController.controller("mainCtrl", function ($scope) {
    $scope.main = "I love Paris";
});
personController.controller('datCtrl', function($scope) {
    $scope.today = new Date();
});