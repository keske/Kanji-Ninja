import template from './rules.html';
import controller from './rules.コントローラー';
import 'bootstrap-webpack';
import './rules.scss';

let rulesコンポ = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default rulesコンポ;
