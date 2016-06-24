/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('OtherController', function($scope) {
    $scope.title="Old Title";
    $scope.setTitle = function() {
        $scope.title = "New Title";
    };
});