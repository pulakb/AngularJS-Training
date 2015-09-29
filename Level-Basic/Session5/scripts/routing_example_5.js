var StudentApp = angular.module('StudentApp', ['ui.router']);

//Define States

StudentApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html'
        });

    $urlRouterProvider.otherwise('/home');
});