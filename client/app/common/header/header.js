import angular from 'angular';
import uiRouter from 'angular-ui-router';
import headerコンポ from './header.コンポ';

let headerModule = angular.module('header', [
    uiRouter
  ])
  .directive('header', headerコンポ);

export default headerModule;
