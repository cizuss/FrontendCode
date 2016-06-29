/**
 * Created by user on 6/29/2016.
 */
hrApp.service('JobsService', ['$http', 'commonResourcesFactoryBackup', function($http, commonResourcesFactoryBackup) {
    return {
        findAllJobs: function() {
            return $http.get(commonResourcesFactoryBackup.findAllJobsUrl)
                .success(function(data, status, headers, config) {
                    return data;
                }).error(function(data, status, headers, config) {
                return;
            });
        },
        findById: function(jobId) {
            return $http.get(commonResourcesFactoryBackup.findOneJobUrl + jobId)
                .success(function (data, status, headers, config) {
                    return data;
                }).error(function (data, status, headers, config) {
                    return;
                });
        }
    }
}]);