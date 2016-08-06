var flightApp = angular.module('flightApp', [
'ngRoute'
]);

flightApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'bcHomeCtrl'
      }).
      when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'galleryCtrl'
      }).
      when('/hotels', {
          templateUrl: 'partials/hotels.html',
          controller: 'hotelsCtrl'
        }).
        when('/tours', {
            templateUrl: 'partials/tours.html',
            controller: 'toursCtrl'
          }).
      otherwise({
        redirectTo: '/home'
      });
  }]);