"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabBar;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertMenu = function (_Component) {
  _inherits(InsertMenu, _Component);

  function InsertMenu() {
    _classCallCheck(this, InsertMenu);

    return _possibleConstructorReturn(this, (InsertMenu.__proto__ || Object.getPrototypeOf(InsertMenu)).apply(this, arguments));
  }

  _createClass(InsertMenu, [{
    key: "getKeys",
    value: function getKeys(type, tools) {
      switch (type) {
        case _constants.TYPES.MAP:
          return Object.keys(tools).filter(function (i) {
            return i !== _constants.SHAPES.gateway;
          });
        case _constants.TYPES.TRACK:
          return Object.keys(tools).filter(function (i) {
            return i === _constants.SHAPES.polygon;
          });
        case _constants.TYPES.GATEWAY:
          return Object.keys(tools).filter(function (i) {
            return i === _constants.SHAPES.gateway;
          });
        default:
          return [];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentTool = _props.currentTool,
          tools = _props.tools,
          onSelect = _props.onSelect,
          type = _props.type,
          onTypeChange = _props.onTypeChange;


      return _react2.default.createElement(
        "div",
        { style: styles.insertMenu },
        _react2.default.createElement(
          "div",
          { style: { display: "flex" } },
          Object.values(_constants.TYPES).map(function (key) {
            return _react2.default.createElement(
              "div",
              {
                key: key,
                style: [styles.tabBar, {
                  background: type === key ? "#1b1c1d" : "none",
                  color: type === key ? "#fff" : "black"
                }],
                onClick: function onClick() {
                  return onTypeChange(key);
                }
              },
              key
            );
          })
        ),
        _react2.default.createElement(
          "h4",
          null,
          "Drawing"
        ),
        _react2.default.createElement(
          "ul",
          { style: styles.toolBox },
          this.getKeys(type, tools).map(function (elementType, i) {
            return _react2.default.createElement(
              "li",
              {
                className: currentTool === elementType ? "insertmenu insertmenuactive" : "insertmenu",
                style: [styles.toolBoxItem, currentTool === elementType && styles.currentToolboxItem],
                onMouseDown: onSelect.bind(_this2, elementType),
                key: i
              },
              _react2.default.createElement(
                "span",
                { style: _extends({}, styles.mainIcon) },
                tools[elementType].meta.icon
              ),
              elementType
            );
          })
        )
      );
    }
  }]);

  return InsertMenu;
}(_react.Component);

var styles = {
  insertMenu: {
    padding: 20,
    textTransform: "capitalize",
    backgroundColor: "#ebebeb"
  },
  toolBox: {
    margin: 0,
    padding: 0
  },
  toolBoxItem: {
    listStyle: "none",
    padding: 5,
    marginTop: 2,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 8,
    ":hover": {
      background: "#dcd8d8"
    }
  },
  currentToolboxItem: {
    background: "#dcd8d8"
  },
  mainIcon: {
    padding: "2px 5px",
    borderBottom: "1px solid #e0e0e0"
  },
  tabBar: (_tabBar = {
    textTransform: "capitalize",
    padding: "5px 10px",
    lineHeight: "1.75"
  }, _defineProperty(_tabBar, "padding", "3px 9px"), _defineProperty(_tabBar, "fontWeight", 600), _defineProperty(_tabBar, "borderBottom", "2px solid #1b1c1d"), _defineProperty(_tabBar, "borderTopRightRadius", 4), _defineProperty(_tabBar, "borderTopLeftRadius", 4), _defineProperty(_tabBar, "cursor", "pointer"), _defineProperty(_tabBar, "fontSize", 12), _defineProperty(_tabBar, "lineHeight", 1.75), _defineProperty(_tabBar, "letterSpacing", "0.02857em"), _tabBar)
};

exports.default = (0, _radium2.default)(InsertMenu);