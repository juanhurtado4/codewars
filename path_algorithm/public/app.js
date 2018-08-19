'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = window.React.Component;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            sqrClicked: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(Squares, null);
        }
    }]);

    return App;
}(Component);

var Squares = function (_Component2) {
    _inherits(Squares, _Component2);

    function Squares(props) {
        _classCallCheck(this, Squares);

        var _this2 = _possibleConstructorReturn(this, (Squares.__proto__ || Object.getPrototypeOf(Squares)).call(this, props));

        _this2.state = {
            path: null,
            goal: false,
            x: null,
            y: null,
            steps: null
        };
        return _this2;
    }

    _createClass(Squares, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Squares'
            );
        }
    }]);

    return Squares;
}(Component);

window.ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
