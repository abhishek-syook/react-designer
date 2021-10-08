"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _ObjectItem = require("./ObjectItem");

var _ObjectItem2 = _interopRequireDefault(_ObjectItem);

var _styles = require("../styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ObjectList = function ObjectList(_ref) {
  var objects = _ref.objects,
      _onChange = _ref.onChange,
      onObjectSelect = _ref.onObjectSelect,
      rest = _objectWithoutProperties(_ref, ["objects", "onChange", "onObjectSelect"]);

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { style: _styles2.default.panelHeader },
      _react2.default.createElement(
        "strong",
        { style: _styles2.default.propertyTitle },
        "Object List"
      )
    ),
    _react2.default.createElement(
      "div",
      { style: { height: "100vh", overflowY: "scroll" } },
      objects.map(function (obj, index) {
        return _react2.default.createElement(_ObjectItem2.default, _extends({
          key: index
        }, obj, rest, {
          onClick: function onClick() {
            return onObjectSelect(index);
          },
          onChange: function onChange(data) {
            return _onChange(index, data);
          }
        }));
      })
    )
  );
};

exports.default = (0, _radium2.default)(ObjectList);