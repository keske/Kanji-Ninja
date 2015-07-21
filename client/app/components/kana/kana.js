import angular from 'angular';
import uiRouter from 'angular-ui-router';
import kanaコンポ from './kana.コンポ';

let kanaModule = angular.module('kana', [
    uiRouter
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('kana', {
        url: '/kana',
        template: '<kana></kana>'
      });
  })
  .directive('kana', kanaコンポ);

export default kanaModule;
