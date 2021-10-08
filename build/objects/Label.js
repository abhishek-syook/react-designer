"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var x = _ref.x,
      y = _ref.y,
      label = _ref.label;

  if (!label) {
    return null;
  }

  return _react2.default.createElement(
    "text",
    { x: x, y: y, style: { fontSize: 12 } },
    label
  );
};

exports.default = Label;