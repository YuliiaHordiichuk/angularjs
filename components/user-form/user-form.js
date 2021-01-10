(function () {
  'use strict';

  angular
    .module('app')
    .component('userForm', component());


  function component() {

    componentController.$inject = ['$scope', 'userService'];

    function componentController($scope, userService) {

      $scope.formData = {
        name: '',
        number: '',
      };

      $scope.addUser = () => {
        const newUser = {};

        newUser.name = $scope.formData.name;
        newUser.number = $scope.formData.number;

        userService.users.push(newUser);

        $scope.formData.name = '';
        $scope.formData.number = '';
      }
    }

    return {
      templateUrl: './components/user-form/user-form.html',
      controller: componentController,
    }
  }
}());
