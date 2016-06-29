hrApp.service('EmployeeService', ['$http', 'commonResourcesFactoryBackup', function ($http, commonResourcesFactoryBackup) {
        return {
            findById: function (employeeId) {
                return $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            findAllEmployees: function() {
                return $http.get(commonResourcesFactoryBackup.findAllEmployeesUrl)
                    .success(function (data) {
                        return data;
                    }).error(function (err) {
                        return;
                    });
            },
            deleteById: function(employeeId) {
                return $http.delete(commonResourcesFactoryBackup.findOneEmployeeUrl + employeeId)
                    .success(function(data) {
                        return data;
                    })
                    .error(function (err) {
                        return ;
                    })
            }
        }
    }]
);