import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rulesコンポ from './rules.コンポ';

let rulesModule = angular.module('rules', [
    uiRouter
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('rules', {
        url: '/rules',
        template: '<rules></rules>'
      });
  })
  .directive('rules', rulesコンポ);

export default rulesModule;