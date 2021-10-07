const FREE = 0;
const DRAG = 1;
const SCALE = 2;
const ROTATE = 3;
const DRAW = 4;
const TYPE = 5;
const EDIT_OBJECT = 6;

export const modes = {
  FREE,
  DRAG,
  SCALE,
  ROTATE,
  DRAW,
  TYPE,
  EDIT_OBJECT,
};

export const TYPES = Object.freeze({
  MAP: "map",
  TRACK: "track",
  GATEWAY: "gateway",
});

export const SHAPES = Object.freeze({
  arc: "arc",
  circle: "circle",
  ellipse: "ellipse",
  polygon: "polygon",
  polyline: "polyline",
  rect: "rect",
  gateway: "gateway",
});

export const buildingBlock = Object.freeze({
  WIFI: "wifi",
});

export const clusterOptions = ["standalone", "cluster"];
