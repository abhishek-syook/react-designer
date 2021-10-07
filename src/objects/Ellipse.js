import React from "react";
import Icon from "../Icon";
import Label from "./Label";

import Vector from "./Vector";

export default class Ellipse extends Vector {
  static meta = {
    icon: <Icon icon={"circle"} size={30} />,
    initial: {
      width: 5,
      height: 5,
      rotate: 0,
      fill: "#000",
      fillOpacity: 0.3,
      strokeWidth: 1,
      stroke: "rgba(0,0,0,1)",
      blendMode: "normal",
      labelCoordinates: { x: 30, y: 30 },
    },
  };

  render() {
    let object = this.props.object;
    return (
      <React.Fragment>
        <ellipse
          style={this.getStyle()}
          {...this.getObjectAttributes()}
          rx={object.width / 2}
          ry={object.height / 2}
          cx={object.x + object.width / 2}
          cy={object.y + object.height / 2}
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
