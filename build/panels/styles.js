"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propertyGroup;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  root: {
    display: "flex"
  },
  panelHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
    minHeight: 24
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: 300
  },
  propertyPanel: {
    padding: "0 5px 6px 5px",
    fontSize: "inherit"
  },
  propertyGroup: (_propertyGroup = {
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingBottom: 12,
    paddingTop: 2,
    paddingLeft: 10,
    border: "0px solid #d3d3d3",
    marginBottom: 5
  }, _defineProperty(_propertyGroup, "border", "1px solid #000"), _defineProperty(_propertyGroup, "borderRadius", 5), _propertyGroup),
  inputHelper: {
    fontSize: 9,
    color: "grey",
    paddingTop: 2,
    paddingLeft: 5
  },
  inlineInputHelper: {
    fontSize: 9,
    display: "inline-block",
    marginLeft: 10
  },
  panelTitle: {
    width: 70,
    padding: 3,
    color: "#000"
  },
  columns: {
    overflow: "hidden",
    marginTop: 10,
    display: "flex",
    alignItems: "self-start"
  },
  column: {
    marginRight: 5
  },
  input: {
    background: "#fff",
    borderWidth: 1,
    padding: "3px 5px",
    color: "#000",
    borderRadius: 3
  },
  select: {
    padding: "3px 3px 3px 5px",
    maxWidth: 130
  },
  integerInput: {
    width: 60
  },
  gatewayInput: {
    width: 120,
    padding: "3px 5px"
  },
  coordinateInput: {
    width: 40,
    padding: "3px 5px"
  },
  coordsHelper: {
    paddingLeft: 0
  },
  textInput: {
    marginTop: 2,
    width: "100%",
    padding: 3
  },
  colorInput: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    display: "inline-block",
    background: "white",
    marginRight: 3
  },
  empty: {
    display: "none"
  },
  button: {
    display: "block",
    cursor: "pointer"
  },
  arrangeButton: {
    color: "#515151",
    textDecoration: "none",
    display: "block",
    padding: "2px 0"
  },
  fabButton: {
    borderRadius: "50%",
    padding: "2px 5px",
    border: 0,
    marginRight: 5
  }
};