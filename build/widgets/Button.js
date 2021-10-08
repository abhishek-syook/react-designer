"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("../panels/styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var style = _ref.style,
      name = _ref.name,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["style", "name", "onClick"]);

  var _onClick = function _onClick(e) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    e.preventDefault();
    onClick.apply(undefined, args);
  };

  return _react2.default.createElement(
    "button",
    { name: name, style: [_styles2.default.button, style], onClick: _onClick },
    props.children
  );
};

exports.default = (0, _radium2.default)(Button);