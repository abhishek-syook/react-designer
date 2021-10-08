"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _ = require(".");

var _track = require("../assets/track.svg");

var _track2 = _interopRequireDefault(_track);

var _wifi = require("../assets/wifi.svg");

var _wifi2 = _interopRequireDefault(_wifi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gateway = function (_Vector) {
  _inherits(Gateway, _Vector);

  function Gateway() {
    _classCallCheck(this, Gateway);

    return _possibleConstructorReturn(this, (Gateway.__proto__ || Object.getPrototypeOf(Gateway)).apply(this, arguments));
  }

  _createClass(Gateway, [{
    key: "getStyle",
    value: function getStyle() {
      return _extends({}, _get(Gateway.prototype.__proto__ || Object.getPrototypeOf(Gateway.prototype), "getStyle", this).call(this));
    }
  }, {
    key: "getTransformMatrix",
    value: function getTransformMatrix(_ref) {
      var rotate = _ref.rotate,
          x = _ref.x,
          y = _ref.y;

      return "rotate(" + rotate + " " + x + " " + y + ")";
    }
  }, {
    key: "render",
    value: function render() {
      var _getObjectAttributes = this.getObjectAttributes(),
          plot = _getObjectAttributes.plot;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement("image", _extends({
          width: "18",
          height: "18",
          href: _wifi2.default,
          style: this.getStyle()
        }, this.getObjectAttributes())),
        _react2.default.createElement("image", { width: "18", height: "18", href: _track2.default, x: plot.x, y: plot.y })
      );
    }
  }]);

  return Gateway;
}(_.Vector);

Gateway.meta = {
  icon: _react2.default.createElement(_Icon2.default, { icon: "wifi", size: 30 }),
  initial: {
    width: 18,
    height: 18,
    rotate: 0,
    x: 0,
    y: 0,
    z: 0,
    name: "",
    macId: "",
    gatewayClusterType: "",
    clusterId: "",
    plot: {
      x: 0,
      y: 0,
      z: 0
    }
  }
};
exports.default = Gateway;