'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.add-a-goal',
  'myApp.d3graph',
  'myApp.version',
  'restangular',
   'ui.bootstrap',
   'myApp.acheivements',
   'd3'
    
]).
config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
  $routeProvider.when('/add-a-goal', {
            templateUrl: 'add-a-goal/add-a-goal.html',
            controller: 'AddAGoalCtrl'
        })
  $routeProvider.when('/acheivements', {
            templateUrl: 'acheivements/acheivements.html',
            controller: 'acheivementsCtrl'
        })
  $routeProvider.otherwise({redirectTo: '/home'});
  RestangularProvider.setBaseUrl('http://localhost:8001');
}]);


