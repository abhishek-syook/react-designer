import React from "react";
import Icon from "../Icon";
import Label from "./Label";

import Vector from "./Vector";

export default class Rect extends Vector {
  static meta = {
    icon: <Icon icon={"rect"} size={30} />,
    initial: {
      width: 5,
      height: 5,
      fill: "#000",
      fillOpacity: 0.3,
      strokeWidth: 1,
      stroke: "rgba(0,0,0,1)",
      radius: 0,
      blendMode: "normal",
      rotate: 0,
      labelCoordinates: { x: 30, y: 30 },
    },
  };

  render() {
    let object = this.props.object;
    return (
      <React.Fragment>
        <rect
          style={this.getStyle()}
          {...this.getObjectAttributes()}
          rx={object.radius}
          width={object.width}
          height={object.height}
          strokeDasharray={object.type == "map" ? 0 : 4}
        />
        <Label
          x={object.labelCoordinates.x}
          y={object.labelCoordinates.y}
          label={object.name || ""}
        />
      </React.Fragment>
    );
  }
}
