var app = angular.module("myModule", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/cat', {
      controller: 'routeController',
      templateUrl: 'views/cat.html'
    })
    .when('/dog', {
      controller: 'routeController',
      templateUrl: 'views/dog.html'
    })
    .when('/ferret', {
      controller: 'routeController',
      templateUrl: 'views/ferret.html'
    })
    .when('/walrus', {
      controller: 'routeController',
      templateUrl: 'views/walrus.html'
    })
    .when('/unknown', {
      controller: 'routeController',
      templateUrl: 'views/'
    })
    .otherwise({ redirectTo: '/'});

    $locationProvider.hashPrefix('');
});
