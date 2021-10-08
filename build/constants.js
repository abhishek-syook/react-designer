"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FREE = 0;
var DRAG = 1;
var SCALE = 2;
var ROTATE = 3;
var DRAW = 4;
var TYPE = 5;
var EDIT_OBJECT = 6;

var modes = exports.modes = {
  FREE: FREE,
  DRAG: DRAG,
  SCALE: SCALE,
  ROTATE: ROTATE,
  DRAW: DRAW,
  TYPE: TYPE,
  EDIT_OBJECT: EDIT_OBJECT
};

var TYPES = exports.TYPES = Object.freeze({
  MAP: "map",
  TRACK: "track",
  GATEWAY: "gateway"
});

var SHAPES = exports.SHAPES = Object.freeze({
  arc: "arc",
  circle: "circle",
  ellipse: "ellipse",
  polygon: "polygon",
  polyline: "polyline",
  rect: "rect",
  gateway: "gateway"
});

var buildingBlock = exports.buildingBlock = Object.freeze({
  WIFI: "wifi"
});

var clusterOptions = exports.clusterOptions = ["standalone", "cluster"];