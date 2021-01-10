(function () {
  'use strict';

  angular
    .module('app')
    .component('card', card());


  function card() {

    cardController.$inject = ['$scope'];
    function cardController($scope) {
      this.$onInit = () => {
        $scope.name = this.info.name;
        $scope.number = this.info.number;
      };
    }

    return {
      templateUrl: './components/card/card.html',
      bindings: {
        info: '<'
      },
      controller: cardController
    }
  }

}());
