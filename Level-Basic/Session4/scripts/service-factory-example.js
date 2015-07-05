angular.module('studentApp', [])
.controller('studentCtrl', [function () {
        var _self = this;
        _self.tab = 'first';
        _self.open = function (tab) {
          _self.tab = tab;
        };
    }])
.controller('innerCtrl', ['StudentService', function (StudentService) {
    var _self = this;
    _self.studentList = function () {
        return StudentService.list();
    };
    _self.add = function () {
        StudentService.add(
            {
                id: StudentService.list().length + 1,
                name: "Student " + (StudentService.list().length + 1)
            }
        );
    };
}])
.factory('StudentService', [function () {
    var _students = [
        {id: 1, name: 'Student 1'},
        {id: 2, name: 'Student 2'},
        {id: 3, name: 'Student 3'}
    ];

    return {
        list: function () {
            return _students;
        },
        add: function (student) {
            _students.push(student);
        }
    }
}]);