import angular from 'angular';
import 漢字 from './漢字.js';

let 漢字サービス = angular.module('漢字サービス', [])
  .service('漢字サービス', function() {

    this.getAll = () => {
      return 漢字;
    };

  });

export default 漢字サービス;
