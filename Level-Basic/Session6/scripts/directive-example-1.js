angular.module('studentApp', [])
.controller('studentController', ['$scope', function ($scope) {
    $scope.info = {
        "name": 'Jon',
        "age": '34'
    };
}])
.directive('studentInfo', function () {
    return {
        template: "Name : {{info.name}} and Age : {{info.age}}"
    }
});