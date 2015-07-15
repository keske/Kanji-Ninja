import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ホームコンポ from './ホーム.コンポ';

let homeModule = angular.module('ホーム', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      });
  })
  .directive('home', ホームコンポ);

export default homeModule;
