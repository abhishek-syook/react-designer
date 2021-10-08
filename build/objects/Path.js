"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initial;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("../constants");

var _Icon = require("../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Vector2 = require("./Vector");

var _Vector3 = _interopRequireDefault(_Vector2);

var _BezierEditor = require("../editors/BezierEditor");

var _BezierEditor2 = _interopRequireDefault(_BezierEditor);

var _Label = require("./Label");

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Path = function (_Vector) {
  _inherits(Path, _Vector);

  function Path() {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).apply(this, arguments));
  }

  _createClass(Path, [{
    key: "buildPath",
    value: function buildPath(object) {
      var path = object.path;


      if (!path) {
        return "";
      }

      var curves = path.map(function (_ref, i) {
        var x1 = _ref.x1,
            y1 = _ref.y1,
            x2 = _ref.x2,
            y2 = _ref.y2,
            x = _ref.x,
            y = _ref.y;

        x1 = x1 || x;
        x2 = x2 || x;
        y1 = y1 || y;
        y2 = y2 || y;

        return "C " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x + " " + y;
      });

      var instructions = ["M " + object.moveX + " " + object.moveY].concat(_toConsumableArray(curves));

      if (object.closed) {
        instructions = [].concat(_toConsumableArray(instructions), ["Z"]);
      }

      return instructions.join("\n");
    }
  }, {
    key: "getTransformMatrix",
    value: function getTransformMatrix(_ref2) {
      var rotate = _ref2.rotate,
          x = _ref2.x,
          y = _ref2.y,
          moveX = _ref2.moveX,
          moveY = _ref2.moveY;

      return "\n      translate(" + (x - moveX) + " " + (y - moveY) + ")\n      rotate(" + rotate + " " + x + " " + y + ")\n    ";
    }
  }, {
    key: "render",
    value: function render() {
      var object = this.props.object;

      var fill = object.closed ? object.fill : "none";

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement("path", _extends({
          style: this.getStyle(object)
        }, this.getObjectAttributes(), {
          d: this.buildPath(object),
          fill: fill,
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

  return Path;
}(_Vector3.default);

Path.meta = {
  initial: (_initial = {
    fill: "#000",
    fillOpacity: 0.3,
    strokeWidth: 1,
    stroke: "rgba(0,0,0,1)",
    closed: false,
    rotate: 0,
    moveX: 0,
    moveY: 0,
    path: []
  }, _defineProperty(_initial, "strokeWidth", 1), _defineProperty(_initial, "labelCoordinates", { x: 30, y: 30 }), _initial),
  mode: _constants.modes.DRAW_PATH,
  icon: _react2.default.createElement(_Icon2.default, { icon: "polygon", size: 30 }),
  editor: _BezierEditor2.default
};
exports.default = Path;