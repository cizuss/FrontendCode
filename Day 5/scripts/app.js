// TODO load ngRoute module
//var hrApp = angular.module('hrApp', []);
var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/numbers', {
                redirectTo: '/math'
            })
            .when('/math', {
                templateUrl: 'views/demo/math.html',
                controller: 'MathController'
            })
            .when('/employeeList', {
                templateUrl: 'views/employeeList.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeView/:employeeId', {
                templateUrl: 'views/employeeView.html',
                controller: 'EmployeeViewController'
            })
            .when('/user', {
                templateUrl: 'views/demo/user.html',
                controller: 'UserController'
            }).when('/employeeAdd', {
            templateUrl: 'views/employeeAdd.html',
            controller: 'EmployeeAddController'
        }).when('/employeeEdit/:employeeId', {
            templateUrl: 'views/employeeEdit.html',
            controller: 'EmployeeEditController'
        }).when('/jobsList', {
            templateUrl: 'views/jobsList.html',
            controller: 'JobsListController'
        }).when('/addJob', {
            templateUrl: 'views/addJob.html',
            controller: 'JobAddController'
        }).when('/viewJob/:jobId', {
            templateUrl: '/views/viewJob.html',
            controller: 'JobViewController'
        }).when('/editJob/:jobId', {
            templateUrl: '/views/editJob.html',
            controller: 'JobEditController'
        })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController'
            });
    }]).run(['$rootScope',
        function ($rootScope) {
            // TODO
        }
    ]);