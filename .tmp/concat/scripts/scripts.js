'use strict';

/**
 * @ngdoc overview
 * @name myToDoApp
 * @description
 * # myToDoApp
 *
 * Main module of the application.
 */
angular
  .module('myToDoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('MainCtrl', ["$scope", "localStorageService", function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.$watch('todos', function() {
        localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    $scope.addToDo = function() {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };

    $scope.removeToDo = function (index) {
        $scope.todos.splice(index, 1);
    };
  }]);

'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
