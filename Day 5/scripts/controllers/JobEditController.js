/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('JobEditController', ['$scope', '$location', '$routeParams', '$http', 'commonResourcesFactoryBackup', 'JobsService', function($scope, $location, $routeParams, $http, commonResourcesFactoryBackup, JobsService) {
    JobsService.findById($routeParams.jobId)
        .then(function (res) {
            $scope.job = res.data;
        }), function (res) {
        console.log("Error");
    };
    $scope.editJob = function (newJob) {
        $http({url: commonResourcesFactoryBackup.editJobUrl, method: 'PUT', data: newJob})
            .success(function (data) {
                $scope.job = data;
                $location.url('/viewJob/' + $scope.job.jobId);
            });
    };
}]);