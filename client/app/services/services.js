import angular from 'angular';
import 漢字サービス from './漢字/漢字.サービス';
import カナサービス from './カナ/カナ.サービス';

let servicesModule = angular.module('app.services', [
  漢字サービス.name,
  カナサービス.name
]);

export default servicesModule;
