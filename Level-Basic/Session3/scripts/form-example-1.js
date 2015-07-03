angular.module('studentApp', [])
.controller('studentCtrl', [function () {
    var _self = this;

    _self.save = function () {
        console.log(_self.student);
    };
}]);
