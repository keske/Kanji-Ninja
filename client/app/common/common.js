import angular from 'angular';
import header from './header/header';
import footer from './footer/footer';
import widget from './widget/widget';

let commonModule = angular.module('app.common', [
  header.name,
  footer.name,
  widget.name
]);

export default commonModule;
