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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
