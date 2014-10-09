'use strict';

angular.module('myApp.detail-page', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail-page/:goalId', {
    templateUrl: 'detail-page/detail-page.html',
    controller: 'DetailPageCtrl'
  });
}])

.controller('DetailPageCtrl', ["Restangular", "$scope", "$routeParams", function(Restangular, $scope, $routeParams) {
        var goalId = $routeParams.goalId;
         Restangular.one("goals", goalId).get().then(function(goal){
            $scope.goal = goal
        });

        $scope.editButtons = "../app/partials/edit-buttons.html";
}]);