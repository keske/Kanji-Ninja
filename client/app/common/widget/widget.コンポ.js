import template from './widget.html';
import controller from './widget.コントローラー';
import './widget.scss';

let widgetコンポ = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default widgetコンポ;
