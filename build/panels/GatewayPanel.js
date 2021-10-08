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

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _Panel2 = require("./Panel");

var _Panel3 = _interopRequireDefault(_Panel2);

var _constants = require("../constants");

var _Column = require("./Column");

var _Column2 = _interopRequireDefault(_Column);

var _Columns = require("./Columns");

var _Columns2 = _interopRequireDefault(_Columns);

var _PropertyGroup = require("./PropertyGroup");

var _PropertyGroup2 = _interopRequireDefault(_PropertyGroup);

var _Input = require("../widgets/Input");

var _Input2 = _interopRequireDefault(_Input);

var _Select = require("../widgets/Select");

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GatewayPanel = function (_Panel) {
  _inherits(GatewayPanel, _Panel);

  function GatewayPanel() {
    _classCallCheck(this, GatewayPanel);

    return _possibleConstructorReturn(this, (GatewayPanel.__proto__ || Object.getPrototypeOf(GatewayPanel)).apply(this, arguments));
  }

  _createClass(GatewayPanel, [{
    key: "onPlotValueChange",
    value: function onPlotValueChange(key, value) {
      var _props = this.props,
          onChange = _props.onChange,
          object = _props.object;

      onChange("plot", _extends({}, object.plot, _defineProperty({}, key, value)));
    }
  }, {
    key: "getMapCluster",
    value: function getMapCluster() {
      var options = this.props.objects.filter(function (_ref) {
        var type = _ref.type,
            name = _ref.name;
        return type == "map" && name !== "";
      }).map(function (_ref2) {
        var name = _ref2.name,
            _id = _ref2._id;
        return { label: name, value: _id || name };
      });
      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var object = this.props.object;


      if (object.elementType !== _constants.TYPES.GATEWAY) {
        return null;
      }

      return _react2.default.createElement(
        _PropertyGroup2.default,
        null,
        _react2.default.createElement(
          _Columns2.default,
          { label: "Mac ID" },
          _react2.default.createElement(
            _Column2.default,
            null,
            (0, _has2.default)(object, "macId") && _react2.default.createElement("input", {
              style: [_styles2.default.input, _styles2.default.gatewayInput],
              value: object.macId,
              onChange: function onChange(e) {
                return _this2.props.onChange("macId", e.target.value);
              }
            })
          )
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: "Cluster Type" },
          _react2.default.createElement(
            _Column2.default,
            null,
            (0, _has2.default)(object, "gatewayClusterType") && _react2.default.createElement(_Select2.default, {
              name: "gatewayClusterType",
              value: object.gatewayClusterType,
              options: _constants.clusterOptions,
              onChange: function onChange(e) {
                return _this2.props.onChange("gatewayClusterType", e.target.value);
              }
            })
          )
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: "Cluster" },
          _react2.default.createElement(
            _Column2.default,
            null,
            (0, _has2.default)(object, "clusterId") && _react2.default.createElement(_Select2.default, {
              name: "clusterId",
              options: this.getMapCluster(),
              value: object.clusterId,
              onChange: function onChange(e) {
                return _this2.props.onChange("clusterId", e.target.value);
              }
            })
          )
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: "Physical Coords" },
          _react2.default.createElement(
            _Column2.default,
            { label: "x (meters)", helperStyle: _styles2.default.coordsHelper },
            (0, _has2.default)(object, "x") && _react2.default.createElement(_Input2.default, {
              type: "number",
              style: _styles2.default.coordinateInput,
              value: object.x,
              onChange: function onChange(e) {
                return _this2.props.onChange("x", e.target.value);
              }
            })
          ),
          _react2.default.createElement(
            _Column2.default,
            { label: "y (meters)", helperStyle: _styles2.default.coordsHelper },
            (0, _has2.default)(object, "y") && _react2.default.createElement(_Input2.default, {
              type: "number",
              style: _styles2.default.coordinateInput,
              value: object.y,
              onChange: function onChange(e) {
                return _this2.props.onChange("y", e.target.value);
              }
            })
          ),
          _react2.default.createElement(
            _Column2.default,
            { label: "z (meters)", helperStyle: _styles2.default.coordsHelper },
            (0, _has2.default)(object, "z") && _react2.default.createElement(_Input2.default, {
              type: "number",
              style: _styles2.default.coordinateInput,
              value: object.z,
              onChange: function onChange(e) {
                return _this2.props.onChange("z", e.target.value);
              }
            })
          )
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: "Plot Coords" },
          _react2.default.createElement(
            _Column2.default,
            { label: "x (meters)", helperStyle: _styles2.default.coordsHelper },
            (0, _has2.default)(object.plot, "x") && _react2.default.createElement(_Input2.default, {
              type: "number",
              style: _styles2.default.coordinateInput,
              value: object.plot.x,
              onChange: function onChange(e) {
                return _this2.onPlotValueChange("x", e.target.value);
              }
            })
          ),
          _react2.default.createElement(
            _Column2.default,
            { label: "y (meters)", helperStyle: _styles2.default.coordsHelper },
            (0, _has2.default)(object.plot, "y") && _react2.default.createElement(_Input2.default, {
              type: "number",
              style: _styles2.default.coordinateInput,
              value: object.plot.y,
              onChange: function onChange(e) {
                return _this2.onPlotValueChange("y", e.target.value);
              }
            })
          ),
          _react2.default.createElement(
            _Column2.default,
            { label: "z (meters)", helperStyle: _styles2.default.coordsHelper },
            (0, _has2.default)(object.plot, "z") && _react2.default.createElement(_Input2.default, {
              type: "number",
              style: _styles2.default.coordinateInput,
              value: object.plot.z,
              onChange: function onChange(e) {
                return _this2.onPlotValueChange("z", e.target.value);
              }
            })
          )
        )
      );
    }
  }]);

  return GatewayPanel;
}(_Panel3.default);

exports.default = GatewayPanel;