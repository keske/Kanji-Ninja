import template from './kana.html';
import controller from './kana.コントローラー';
import './kana.scss';

let kanaコンポ = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default kanaコンポ;
