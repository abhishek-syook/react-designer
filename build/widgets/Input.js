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

var Input = function Input(_ref) {
  var type = _ref.type,
      style = _ref.style,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange;

  return _react2.default.createElement("input", {
    name: name,
    type: type,
    value: value,
    style: [_styles2.default.input, style],
    onChange: onChange
  });
};

Input.defaultProps = {
  type: "text",
  name: ""
};

exports.default = (0, _radium2.default)(Input);