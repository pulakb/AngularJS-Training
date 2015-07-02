angular.module('example2', [])
.controller('example2Ctrl', ['$scope', function ($scope) {
    $scope.jungle = "Angular";
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['example2'])
});