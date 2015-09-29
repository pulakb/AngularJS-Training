/*
* Example to define routes with external templates and Controller
* */
angular.module('OrderApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/showOrder/:orderID', {
        templateUrl: 'templates/showSpecificOrder.html',
        controller: 'ShowOrderCtrl'
    });
}]);

// Define the controller
angular.module('OrderApp').controller('ShowOrderCtrl', ['$scope', '$routeParams',function ($scope, $routeParams) {
    var orderId = $routeParams.orderID;
    $scope.orderID = orderId;
}]);