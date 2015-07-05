angular.module('studentApp', [])
.config(['StudentServiceProvider', function (StudentServiceProvider) {
        StudentServiceProvider.disableDefaultStudents();
    }])
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
.provider('StudentService', [function () {
    var haveDefaultStudents = true;

    this.disableDefaultStudents = function () {
        haveDefaultStudents = false;
    };

    this.$get = [function () {
        var studentList = [];

        if (haveDefaultStudents) {
            studentList = [
                {id: 1, name: 'Student 1'},
                {id: 2, name: 'Student 2'},
                {id: 3, name: 'Student 3'}
            ];
        }

        return new StudentService(studentList);
    }];
}]);

function StudentService (initList) {

    var _students = initList || {};

    this.list = function () {
        return _students;
    };

    this.add = function (student) {
        _students.push(student);
    } ;
}