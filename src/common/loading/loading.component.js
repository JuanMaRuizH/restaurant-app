(function(){
  'use strict';
  angular
    .module('common')
    .component('loading', {
      template: '<img src="images/spinner.svg" ng-if="$ctrl.show"></img>',
      controller: LoadingController
    });

    LoadingController.$inject = ['$rootScope'];

    function LoadingController($rootScope) {
      var $ctrl = this;
      var listener;

      $ctrl.onInit = function() {
        $ctrl.show = false;
      }
    }
})()