angular.module('studentApp', [])
.controller('studentCtrl', [function () {
    var _self = this;

    _self.sports = [
        {name: 'Cricket', selected: 'YES'},
        {name: 'Tennis', selected: 'NO'},
        {name: 'Football', selected: 'NO'},
        {name: 'Hockey', selected: 'YES'}
    ];

    _self.save = function () {
        console.log(_self.student);
    };
}]);
