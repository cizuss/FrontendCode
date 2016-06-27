hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {

        $scope.employee = {};


        // TODO #HR6 get employee by id
        $http.get("http://hrapp-zth.rhcloud.com/hrapp/employees/" + $routeParams.employeeid)
            .success(function(data, status, header, config) {
                $scope.employee = data;
            }).error(function(data, status, header, config) {
            ;
        });


        $scope.back = function() {
            // TODO back to Employee List page
            $location.url("/employeelist");
        }

    }]);