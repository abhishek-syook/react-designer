"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorInput = function ColorInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange;

  return _react2.default.createElement("input", {
    type: "color",
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  });
};

exports.default = ColorInput;