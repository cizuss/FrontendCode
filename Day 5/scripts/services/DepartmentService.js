/**
 * Created by user on 6/29/2016.
 */
hrApp.service('DepartmentService', ['$http', 'commonResourcesFactoryBackup', function($http, commonResourcesFactoryBackup) {
    return {
        findAllDepartments: function() {
            return $http.get(commonResourcesFactoryBackup.findAllDepartmentsUrl)
                .success(function(data, status, headers, config) {
                    return data;
                }).error(function(data, status, headers, config) {
                return;
            });
        }
    }
}]);