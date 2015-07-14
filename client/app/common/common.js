import angular from 'angular';
import header from './header/header';

let commonModule = angular.module('app.common', [
  header.name,
]);

export default commonModule;
