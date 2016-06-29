/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('JobsListController', ['$scope', '$http','$location', 'commonResourcesFactoryBackup', function($scope, $http, $location, commonResourcesFactoryBackup) {
    $scope.jobs = [];
    $http.get(commonResourcesFactoryBackup.findAllJobsUrl)
        .success(function(data) {
           $scope.jobs = data; 
        });
    $scope.viewJob = function (jobId) {
        $location.url('/viewJob/' + jobId);
    };
    $scope.editJob = function (jobId) {
        $location.url('/editJob/' + jobId);
    }
    $scope.deleteJob = function (jobId) {
        $http.delete(commonResourcesFactoryBackup.findOneJobUrl + jobId);
        window.alert("Job deleted");
    };
}]);