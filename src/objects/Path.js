import React from "react";
import { modes } from "../constants";
import Icon from "../Icon";

import Vector from "./Vector";
import BezierEditor from "../editors/BezierEditor";
import Label from "./Label";

export default class Path extends Vector {
  static meta = {
    initial: {
      fill: "#000",
      fillOpacity: 0.3,
      strokeWidth: 1,
      stroke: "rgba(0,0,0,1)",
      closed: false,
      rotate: 0,
      moveX: 0,
      moveY: 0,
      path: [],
      strokeWidth: 1,
      labelCoordinates: { x: 30, y: 30 },
    },
    mode: modes.DRAW_PATH,
    icon: <Icon icon={"polygon"} size={30} />,
    editor: BezierEditor,
  };

  buildPath(object) {
    let { path } = object;

    if (!path) {
      return ``;
    }

    let curves = path.map(({ x1, y1, x2, y2, x, y }, i) => {
      x1 = x1 || x;
      x2 = x2 || x;
      y1 = y1 || y;
      y2 = y2 || y;

      return `C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
    });

    let instructions = [`M ${object.moveX} ${object.moveY}`, ...curves];

    if (object.closed) {
      instructions = [...instructions, "Z"];
    }

    return instructions.join("\n");
  }

  getTransformMatrix({ rotate, x, y, moveX, moveY }) {
    return `
      translate(${x - moveX} ${y - moveY})
      rotate(${rotate} ${x} ${y})
    `;
  }

  render() {
    let { object } = this.props;
    let fill = object.closed ? object.fill : "none";

    return (
      <React.Fragment>
        <path
          style={this.getStyle(object)}
          {...this.getObjectAttributes()}
          d={this.buildPath(object)}
          fill={fill}
          strokeDasharray={object.type == "map" ? 0 : 4}
        />
        <Label
          x={object.labelCoordinates.x}
          y={object.labelCoordinates.y}
          label={object.name}
        />
      </React.Fragment>
    );
  }
}
