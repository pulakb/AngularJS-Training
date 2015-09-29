var StudentApp = angular.module('StudentApp', ['ui.router']);

//Define States

StudentApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home-1.html'
        })
        .state('home.list', {
            url:'/list',
            templateUrl: 'templates/home-list.html',
            controller: function ($scope) {
                $scope.students = [
                    {name: 'Mark Waugh', city:'New York', id: '001'},
                    {name: 'Steve Jonathan', city:'London', id: '002'},
                    {name: 'John Marcus', city:'Paris', id: '003'}
                ];
            }
        })
        .state('home.paragraph', {
            url: '/paragraph',
            templateUrl: 'templates/home-paragraph.html'
        })
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'templates/about-1.html' },
                'columnOne@about': {template: 'About Page Left Column'},
                'columnTwo@about': {template: 'About Page Right Column'}
            }

        });

    $urlRouterProvider.otherwise('/home');
});