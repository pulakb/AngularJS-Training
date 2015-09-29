/*
* Example to define routes with external templates and Controller
* */
angular.module('StudentApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/studentHome.html',
        controller: 'StudentController'
    })
        .when('/students', {
            templateUrl: 'templates/studentList.html',
            controller: 'StudentController'
        })
        .when('/students/:sid', {
        templateUrl: 'templates/studentDetails.html',
        controller: 'StudentController'
    });
}]);

// Define the controller
angular.module('StudentApp').controller('StudentController', ['$scope', '$routeParams',function ($scope, $routeParams) {
    var studentID = $routeParams.sid;

    $scope.message = "Click on the link to view Student Details";

    $scope.studentList = [
        {name: 'Mark Waugh', city:'New York', id: '001'},
        {name: 'Steve Jonathan', city:'London', id: '002'},
        {name: 'John Marcus', city:'Paris', id: '003'}
    ];

    var studentCount = $scope.studentList.length;

    if (studentID) {
        for (var i = 0; i < studentCount; i++) {
            var _id = $scope.studentList[i]["id"];

            if (studentID === _id) {
               $scope.studentDetails = $scope.studentList[i];
               break;
            }
        }
    }



}]);