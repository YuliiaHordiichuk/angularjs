(function () {
  'use strict';

  angular
    .module('app')
    .factory('userService', Factory)

  function Factory() {
    const users = [];

    return {
      users,
    }
  }

}());
