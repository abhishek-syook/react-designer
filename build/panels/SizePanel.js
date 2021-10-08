"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _has = require("lodash/has");

var _has2 = _interopRequireDefault(_has);

var _Panel2 = require("./Panel");

var _Panel3 = _interopRequireDefault(_Panel2);

var _PropertyGroup = require("./PropertyGroup");

var _PropertyGroup2 = _interopRequireDefault(_PropertyGroup);

var _Columns = require("./Columns");

var _Columns2 = _interopRequireDefault(_Columns);

var _Column = require("./Column");

var _Column2 = _interopRequireDefault(_Column);

var _Button = require("../widgets/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SizePanel = function (_Panel) {
  _inherits(SizePanel, _Panel);

  function SizePanel() {
    _classCallCheck(this, SizePanel);

    return _possibleConstructorReturn(this, (SizePanel.__proto__ || Object.getPrototypeOf(SizePanel)).apply(this, arguments));
  }

  _createClass(SizePanel, [{
    key: "onLabelPosChange",
    value: function onLabelPosChange(key, value) {
      this.props.onChange("labelCoordinates", _extends({}, this.props.object.labelCoordinates, _defineProperty({}, key, value)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var object = this.props.object;

      return _react2.default.createElement(
        _PropertyGroup2.default,
        { object: object },
        _react2.default.createElement(
          _Columns2.default,
          { label: "Name" },
          _react2.default.createElement(_Column2.default, {
            label: "Object Name",
            value: object.name || "",
            inputStyle: { width: "130px" },
            onChange: this.props.onChange.bind(this, "name")
          })
        ),
        (0, _has2.default)(object.labelCoordinates, "x", "y") && _react2.default.createElement(
          _Columns2.default,
          { label: "Label Position" },
          _react2.default.createElement(_Column2.default, {
            showIf: (0, _has2.default)(object.labelCoordinates, "x"),
            label: "x",
            value: object.labelCoordinates.x,
            onChange: function onChange(value) {
              return _this2.onLabelPosChange("x", value);
            }
          }),
          _react2.default.createElement(_Column2.default, {
            showIf: (0, _has2.default)(object.labelCoordinates, "y"),
            label: "y",
            value: object.labelCoordinates.y,
            onChange: function onChange(value) {
              return _this2.onLabelPosChange("y", value);
            }
          })
        ),
        (0, _has2.default)(object, "width", "height") && _react2.default.createElement(
          _Columns2.default,
          { label: "Size" },
          _react2.default.createElement(_Column2.default, {
            showIf: (0, _has2.default)(object, "width"),
            label: "width",
            value: object.width,
            onChange: this.props.onChange.bind(this, "width")
          }),
          _react2.default.createElement(_Column2.default, {
            showIf: (0, _has2.default)(object, "height"),
            label: "height",
            value: object.height,
            onChange: this.props.onChange.bind(this, "height")
          })
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: "Position" },
          _react2.default.createElement(_Column2.default, {
            showIf: (0, _has2.default)(object, "x"),
            label: "top",
            value: object.x,
            readOnly: true,
            onChange: this.props.onChange.bind(this, "x")
          }),
          _react2.default.createElement(_Column2.default, {
            showIf: (0, _has2.default)(object, "y"),
            label: "top",
            value: object.y,
            readOnly: true,
            onChange: this.props.onChange.bind(this, "y")
          })
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: "Shape" },
          _react2.default.createElement(
            "p",
            { style: { margin: 0, textTransform: "capitalize" } },
            object.elementType
          )
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: "Type" },
          _react2.default.createElement(
            "p",
            { style: { margin: 0, textTransform: "capitalize" } },
            object.type
          )
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: "Delete" },
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.props.onDelete },
            "Delete Shape"
          )
        )
      );
    }
  }]);

  return SizePanel;
}(_Panel3.default);

exports.default = SizePanel;