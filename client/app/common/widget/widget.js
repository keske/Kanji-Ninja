import angular from 'angular';
import uiRouter from 'angular-ui-router';
import widgetコンポ from './widget.コンポ';

let widgetModule = angular.module('widget', [
    uiRouter
  ])
  .directive('widget', widgetコンポ);

export default widgetModule;
