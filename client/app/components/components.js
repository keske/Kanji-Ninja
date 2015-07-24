import angular from 'angular';
import ホーム from './ホーム/ホーム';
import Kana from './kana/kana';
import Rules from './rules/rules';

let componentModule = angular.module('app.components', [
	ホーム.name,
  Kana.name,
  Rules.name
]);

export default componentModule;