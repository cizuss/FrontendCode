/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('JobViewController', ['$scope', 'JobsService', '$routeParams', function($scope, JobsService, $routeParams) {
    JobsService.findById($routeParams.jobId)
        .then(function (res) {
            $scope.job = res.data;
        }), function (res) {
        console.log("Error");
    };
}]);