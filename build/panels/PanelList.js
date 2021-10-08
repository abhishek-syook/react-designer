"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _Icon = require("../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PanelList = function PanelList(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var objectComponent = props.objectComponent,
      onObjectSelect = props.onObjectSelect;


  return _react2.default.createElement(
    "div",
    { style: [_styles2.default.propertyPanel] },
    _react2.default.createElement(
      "div",
      { style: _styles2.default.panelHeader },
      _react2.default.createElement(_Icon2.default, {
        icon: "back",
        active: true,
        onClick: function onClick() {
          return onObjectSelect(null);
        },
        size: 24,
        style: { cursor: "pointer", marginRight: 5 }
      }),
      _react2.default.createElement(
        "strong",
        { style: _styles2.default.propertyTitle },
        "Item Properties"
      )
    ),
    objectComponent.panels.map(function (Panel, i) {
      return _react2.default.createElement(Panel, _extends({ key: i }, props));
    })
  );
};

exports.default = (0, _radium2.default)(PanelList);