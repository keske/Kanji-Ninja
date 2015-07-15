import template from './ホーム.html';
import controller from './ホーム.コントローラー';
import 'bootstrap-webpack';
import './ホーム.scss';

let ホームコンポ = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default ホームコンポ;
