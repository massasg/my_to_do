'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addToDo = function() {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };
    $scope.removeToDo = function (index) {
        $scope.todos.splice(index, 1);
    };
  });
