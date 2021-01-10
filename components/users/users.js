(function () {
  'use strict';

  angular
    .module('app')
    .component('users', component());


  function component() {

    componentController.$inject = ['$scope', 'userService'];
    function componentController($scope, userService) {
      $scope.users = userService.users;
    }

    return {
      templateUrl: './components/users/users.html',
      controller: componentController,
    }
  }

}());
