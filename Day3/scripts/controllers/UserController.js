/**
 * Created by user on 6/27/2016.
 */
hrApp.controller('UserController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
    $scope.showSem = true;
    $scope.goToMainPage = function() {
        $location.url('/');
    };
    $scope.resetData = function() {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.id = "";
    };
    $scope.saveData = function() {
        $scope.data = UserService.saveData($scope.firstName, $scope.lastName, $scope.id);
    };
    $scope.showHide = function() {
        $scope.showSem = !($scope.showSem);
    }
}]);