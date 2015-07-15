import template from './header.html';
import controller from './header.コントローラー';
import './header.scss';

let headerコンポ = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default headerコンポ;
