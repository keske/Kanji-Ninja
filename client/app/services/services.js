import angular from 'angular';
import 漢字サービス from './漢字/漢字.サービス';

let servicesModule = angular.module('app.services', [
  漢字サービス.name
]);

export default servicesModule;
