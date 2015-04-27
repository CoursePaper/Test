'use strict';

angular.module('webrtcV0App', [
  'ngResource',
  'ngRoute',
  'MainCtrl'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../app/views/index.html',
        controller: 'MainCtrl'
      })
      .when('/cont', {
        templateUrl: '../app/views/contacts.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '../app/views/about.html',
        controller: 'MainCtrl'
      })
      .when('/sin', {
        templateUrl: '../app/views/signin.html',
        controller: 'MainCtrl'
      })
      .when('/sup', {
        templateUrl: '../app/views/signup.html',
        controller: 'MainCtrl'
      })
      // .when('/main', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
