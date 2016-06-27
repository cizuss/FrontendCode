hrApp.controller('MathController', ['$scope', 'MathService', function($scope, MathService){
    
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
          /*$scope.op1 = $scope.number_a + $scope.number_b;
        $scope.op2 = $scope.number_a - $scope.number_b;
        $scope.op3 = $scope.number_a * $scope.number_b;
        $scope.op4 = $scope.number_a / $scope.number_b;*/
//        TODO #13 refactor your calculations using MathService
        $scope.op1 = MathService.add($scope.number_a, $scope.number_b);
        $scope.op2 = MathService.substract($scope.number_a, $scope.number_b);
        $scope.op3 = MathService.multiply($scope.number_a, $scope.number_b);
        $scope.op4 = MathService.divide($scope.number_a, $scope.number_b);
    }

}]);
