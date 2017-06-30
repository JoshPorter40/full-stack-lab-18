angular.module('chirpApp', ['chirpApp.controllers', 'chirpApp.factories', 'ngResource', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ChirpListController'
    })
    .when('/list/:id', {
        templateUrl: 'views/single_view.html',
        controller: 'SingleChirpController'
    })
    .otherwise({
        redirectTo: '/'
    })
}])