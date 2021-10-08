"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _styles = require("../panels/styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Select = function Select(_ref) {
  var style = _ref.style,
      options = _ref.options,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["style", "options", "name", "value", "onChange"]);

  var getOptions = function getOptions() {
    var clusterOptions = [];
    if (typeof options[0] === "string") {
      clusterOptions = options.map(function (data, index) {
        return _react2.default.createElement(
          "option",
          { key: index, value: data },
          data
        );
      });
    } else {
      clusterOptions = options.map(function (_ref2, index) {
        var label = _ref2.label,
            value = _ref2.value;
        return _react2.default.createElement(
          "option",
          { key: index, value: value },
          label
        );
      });
    }

    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        "option",
        { value: "" },
        "Select Option"
      ),
      clusterOptions
    );
  };

  return _react2.default.createElement(
    "select",
    _extends({
      name: name,
      style: [_styles2.default.select, style],
      value: value,
      onChange: onChange
    }, rest),
    getOptions()
  );
};

Select.defaultProps = {
  options: [],
  name: ""
};

exports.default = (0, _radium2.default)(Select);