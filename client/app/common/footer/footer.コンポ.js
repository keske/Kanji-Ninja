import template from './footer.html';
import controller from './footer.コントローラー';
import './footer.scss';

let footerコンポ = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default footerコンポ;
