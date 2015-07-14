import template from './footer.html';
import controller from './footer.controller';
import './footer.styl';

let footerComponent = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default footerComponent;
