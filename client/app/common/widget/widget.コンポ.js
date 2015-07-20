import template from './widget.html';
import controller from './widget.コントローラー';
import './widget.scss';

import $ from 'jquery';

let widgetコンポ = function() {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true,
        // link(scope, elem, attrs, ngModelController) {
        //     console.log(attrs.query)
        //     scope.$watch(function() {
        //         return $('widget').attr('class');
        //     }, function(newValue) {});
        // }
    };
};

export default widgetコンポ;
