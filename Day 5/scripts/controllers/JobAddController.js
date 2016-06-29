/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'commonResourcesFactoryBackup', function($scope, $http, $location, commonResourcesFactoryBackup) {
    $scope.job = {};
    $scope.addJob = function(newJob) {
        $http({url: commonResourcesFactoryBackup.addJobUrl, method: 'POST', data: newJob})
            .success(function (data) {
                $scope.job = data;
                $location.url('/jobsList/');
            });
    };
}]);