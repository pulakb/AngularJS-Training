angular.module('studentApp', [])
.controller('studentCtrl', [function () {
    var _self = this;

    _self.profiles = [
        {name: 'C++', id: 1},
        {name: 'HTML', id: 2},
        {name: 'CSS', id: 3},
        {name: 'JS', id: 4}
    ];

    _self.selectedProfileID = 2;
    _self.selectedProfile = _self.profiles[1];

    _self.save = function () {
        console.log(_self.student);
    };
}]);
