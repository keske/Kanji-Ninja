import template from './header.html';
import controller from './header.controller';
import './header.styl';

let headerComponent = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default headerComponent;
