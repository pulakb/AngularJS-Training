angular.module('timerApp', [])
    .controller('timerController',['$scope', function ($scope) {
        $scope.format = 'M/d/yy h:mm:ss a';
    }])
.directive('timerTime', ['$interval', 'dateFilter', function ($interval, dateFilter) {

    function link (scope, element, attr) {
        var format, timeoutId;

        function updateTime() {
            element.text(dateFilter(new Date(), format));
        }

        scope.$watch(attr.timerTime, function (value){
            format = value;
            updateTime();
        });

        element.on('$destroy', function () {
            $interval.cancel(timeoutId);
        });

        timeoutId = $interval(function () {
            updateTime();
        }, 1000);
    }

        return {
            link: link
        };

 }]);