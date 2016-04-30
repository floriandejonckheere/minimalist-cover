/**
 * application.js
 *
 * */

var site = angular.module('site', [
  'ngRoute',
  'ngAnimate'
]);

site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      activeTab: 'cover',
      controller: 'mainController'
    })
    .when('/home', {
      templateUrl: 'templates/home.html',
      activeTab: 'home'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      activeTab: 'about'
    })
    .when('/links', {
      templateUrl: 'templates/links.html',
      activeTab: 'links'
    })
    .when('/contact', {
      templateUrl: 'templates/contact.html',
      activeTab: 'contact'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

site.controller('mainController', function($scope, $route) {
  $scope.$route = $route;
});