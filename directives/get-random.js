(function () {
  'use strict';

  angular
    .module('app')
    .directive('getRandom', directive);

  function directive() {

    function link($scope) {
      console.log($scope);
    }

    return {
      restrict: 'A',
      link,
    }
  }

}());
