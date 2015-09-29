/*
* Example to define routes with external templates and Controller
* */
angular.module('OrderApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/addOrder', {
        templateUrl: 'templates/addOrder.html',
        controller: 'AddOrderCtrl'
    })
    .when('/showOrder', {
        templateUrl: 'templates/showOrder.html',
        controller: 'ShowOrderCtrl'
    })
    .otherwise({'redirectedTo': '/addOrder'})
}]);

// Define the controller
angular.module('OrderApp').controller("AddOrderCtrl", ['$scope', function ($scope) {
    $scope.message = 'Add Order Form';
}]);

angular.module('OrderApp').controller('ShowOrderCtrl', ['$scope', function ($scope) {
    $scope.message = "Show Order List";
}]);