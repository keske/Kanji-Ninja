import angular from 'angular';
import ホーム from './ホーム/ホーム';

let componentModule = angular.module('app.components', [
	ホーム.name,
]);

export default componentModule;