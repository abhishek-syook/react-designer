"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("../../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _PropertyGroup = require("../PropertyGroup");

var _PropertyGroup2 = _interopRequireDefault(_PropertyGroup);

var _Columns = require("../Columns");

var _Columns2 = _interopRequireDefault(_Columns);

var _Column = require("../Column");

var _Column2 = _interopRequireDefault(_Column);

var _Button = require("../../widgets/Button");

var _Button2 = _interopRequireDefault(_Button);

var _styles = require("../styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ObjectItem = function ObjectItem(_ref) {
  var onClick = _ref.onClick,
      _onChange = _ref.onChange,
      onAddClusterClick = _ref.onAddClusterClick,
      props = _objectWithoutProperties(_ref, ["onClick", "onChange", "onAddClusterClick"]);

  var name = props.name,
      elementType = props.elementType,
      type = props.type,
      clusterList = props.clusterList,
      clusterId = props.clusterId;


  var clusterOptions = _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      "option",
      { value: "" },
      "Select Cluster"
    ),
    ",",
    clusterList.map(function (i) {
      return _react2.default.createElement(
        "option",
        { key: i.value, value: i.value },
        i.label
      );
    }),
    ","
  );

  return _react2.default.createElement(
    _PropertyGroup2.default,
    null,
    _react2.default.createElement(
      _Columns2.default,
      { label: "Label" },
      _react2.default.createElement(
        _Column2.default,
        { name: true },
        _react2.default.createElement(
          "p",
          { style: { margin: 0, textTransform: "capitalize" } },
          name || elementType
        )
      )
    ),
    _react2.default.createElement(
      _Columns2.default,
      { label: "Type" },
      type ? _react2.default.createElement(
        "div",
        { style: { display: "flex", alignItems: "center" } },
        _react2.default.createElement(
          _Column2.default,
          null,
          type
        ),
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(_Icon2.default, { icon: type, size: 24 })
        )
      ) : null
    ),
    _react2.default.createElement(
      _Columns2.default,
      { label: "Shape" },
      _react2.default.createElement(
        _Column2.default,
        { name: true },
        _react2.default.createElement(
          "p",
          { style: { margin: 0, textTransform: "capitalize" } },
          elementType
        )
      )
    ),
    _react2.default.createElement(
      _Columns2.default,
      { label: "Cluster" },
      _react2.default.createElement(
        _Column2.default,
        null,
        _react2.default.createElement(
          "div",
          { style: { display: "flex" } },
          _react2.default.createElement(
            _Button2.default,
            { style: _styles2.default.fabButton, onClick: onAddClusterClick },
            "+"
          ),
          _react2.default.createElement(
            "select",
            {
              value: clusterId,
              onChange: function onChange(e) {
                return _onChange({ clusterId: e.target.value });
              }
            },
            clusterOptions
          )
        )
      )
    ),
    _react2.default.createElement(
      _Columns2.default,
      { label: "Edit" },
      _react2.default.createElement(
        "button",
        { onClick: onClick },
        "Edit Shape"
      )
    )
  );
};

exports.default = ObjectItem;