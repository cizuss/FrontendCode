/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('FormsController', ['$scope', function($scope) {
    $scope.submitData = function() {
        if (!($scope.myForm.$valid)) {
            window.alert("Not all fields were completed!");
        }
        else
            window.alert("Data submitted!");
    }
}]);