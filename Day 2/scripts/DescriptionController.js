/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('DescriptionController',function($scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.showDescription = true;
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.toggleDescriptionShow = function() {
        $scope.showDescription = !($scope.showDescription);
    };
});