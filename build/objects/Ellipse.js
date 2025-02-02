"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require("./Label");

var _Label2 = _interopRequireDefault(_Label);

var _Vector2 = require("./Vector");

var _Vector3 = _interopRequireDefault(_Vector2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ellipse = function (_Vector) {
  _inherits(Ellipse, _Vector);

  function Ellipse() {
    _classCallCheck(this, Ellipse);

    return _possibleConstructorReturn(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).apply(this, arguments));
  }

  _createClass(Ellipse, [{
    key: "render",
    value: function render() {
      var object = this.props.object;
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement("ellipse", _extends({
          style: this.getStyle()
        }, this.getObjectAttributes(), {
          rx: object.width / 2,
          ry: object.height / 2,
          cx: object.x + object.width / 2,
          cy: object.y + object.height / 2,
          strokeDasharray: object.type == "map" ? 0 : 4
        })),
        _react2.default.createElement(_Label2.default, {
          x: object.labelCoordinates.x,
          y: object.labelCoordinates.y,
          label: object.name
        })
      );
    }
  }]);

  return Ellipse;
}(_Vector3.default);

Ellipse.meta = {
  icon: _react2.default.createElement(_Icon2.default, { icon: "circle", size: 30 }),
  initial: {
    width: 5,
    height: 5,
    rotate: 0,
    fill: "#000",
    fillOpacity: 0.3,
    strokeWidth: 1,
    stroke: "rgba(0,0,0,1)",
    blendMode: "normal",
    labelCoordinates: { x: 30, y: 30 }
  }
};
exports.default = Ellipse;