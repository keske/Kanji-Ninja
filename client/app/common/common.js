import angular from 'angular';
import header from './header/header';
import footer from './footer/footer';

let commonModule = angular.module('app.common', [
  header.name,
  footer.name,
]);

export default commonModule;
