angular.module('studentApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        template: "<h5>Welcome to Student HP</h5>"
    })
        .when ('/about', {
        template: "<h5>About Us page</h5>"
    })
        .otherwise({redirectTo: '/'});
}]);