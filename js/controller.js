var personController=angular.module("personController", ["ngRoute","720kb.datepicker", "personController"]);

personController.controller('datCtrl', function($scope) {
    $scope.today = new Date();
});

personController.controller("addEmployeeCtrl", function($scope) {
    $scope.companies = [
                        { 'employeeName':'Ahmed',
                            'employeeCode': 125000,
                            'department': 'PHP Devlopment',
                            'birthDay':'1985-06-13',
                             'gender':'male'},
                            { 'employeeName':'Mohamed',
                                'employeeCode': 100000,
                                'department': 'Graphic',
                                'birthDay':'1992-02-01',
                                'gender':'male'},
                                { 'employeeName':'Ali',
                                    'employeeCode': 115000,
                                    'department': 'Mangment',
                                    'birthDay':'1989-08-13',
                                    'gender':'male'},
                                    { 'employeeName':'Hossam',
                                        'employeeCode': 150000,
                                        'department': 'Graphic',
                                        'birthDay':'1995-03-13',
                                        'gender':'male'},
                                        { 'employeeName':'Hisham',
                                            'employeeCode': 90000,
                                            'department': 'UI Devlopment',
                                            'birthDay':'1991-06-13',
                                            'gender':'male'},
                        ];
    $scope.addRow = function(){		
        $scope.companies.push({ 'employeeName':$scope.employeeName, 'employeeCode': $scope.employeeCode, 'department':$scope.department, 'birthDay':$scope.birthDay, 'gender':$scope.gender });
        $scope.employeeName='';
        $scope.employeeCode='';
        $scope.department='';
        $scope.birthDay='';
        $scope.gender='';
    };
    
});

