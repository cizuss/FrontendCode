/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('ColorsController', ['$scope', '$filter', function($scope, $filter) {
    $scope.colors = [
        {
            "text" : "muted",
            "class" : "text-muted",
            "type" : "strong"
        },
        {
            "text" : "primary",
            "class" : "text-primary",
            "type" : "strong"
        },
        {
            "text" : "success",
            "class" : "text-success",
            "type" : "strong"
        },
        {
            "text" : "info",
            "class" : "text-info",
            "type" : "boring"
        },
        {
            "text" : "warning",
            "class" : "text-warning",
            "type" : "boring"
        },
        {
            "text" : "danger",
            "class" : "text-danger",
            "type" : "boring"
        }
    ];
    $scope.changeColor = function() {
      $scope.selectedColor = $scope.myColor.class;
    };

    $scope.date = new Date();
    $scope.otherDate = new Date();
    $scope.otherDate = $filter('date')($scope.otherDate, 'shortDate', null);
}]);