angular.module('studentApp', [])
.controller('studentController', ['$scope', function ($scope) {
    $scope.jon = {
        "name": 'Jon',
        "age": '34'
    };

    $scope.rob = {
        "name": 'Rob',
        "age": '24'
    };

    $scope.ron = {
        "name": 'Ron',
        "age": '14'
    };

}])
.directive('studentInfo', function () {
    return {
        restrict: 'E',
        templateUrl: "./templates/student-info-3.html",
        scope: {
            customerInfo: "=info"
        }
    }
});