import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerコンポ from './footer.コンポ';

let footerModule = angular.module('footer', [
    uiRouter
  ])
  .directive('footer', footerコンポ);

export default footerModule;
