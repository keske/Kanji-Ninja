import angular from 'angular';
import ホーム from './ホーム/ホーム';
import Kana from './kana/kana';

let componentModule = angular.module('app.components', [
	ホーム.name,
  Kana.name
]);

export default componentModule;