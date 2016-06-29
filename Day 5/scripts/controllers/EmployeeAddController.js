hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'commonResourcesFactoryBackup','DepartmentService','EmployeeService','JobsService',
    function($scope, $http, $location, commonResourcesFactoryBackup, DepartmentService, EmployeeService, JobsService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        /* get all departments */
        /*$http.get(commonResourcesFactoryBackup.findAllDepartmentsUrl)
            .success(function(data, status, headers, config) {
            $scope.departments = data;
        });*/
        DepartmentService.findAllDepartments().then(function(res) {
            $scope.departments = res.data;
        }), function(err) {
            console.log("Error at find all departments");
        };
        /* get all jobs */
        JobsService.findAllJobs().then(function(res) {
            $scope.jobs = res.data;
        }), function(err) {
            console.log("Error");
        };
        /* get all managers */
        EmployeeService.findAllEmployees().then(function(res) {
            $scope.managers = res.data;
        }), function(err) {
            console.log("Error");
        };


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);