import React from "react";
import Icon from "../Icon";
import { Vector } from ".";
import trackSvg from "../assets/track.svg";
import gatewaySVG from "../assets/wifi.svg";

export default class Gateway extends Vector {
  static meta = {
    icon: <Icon icon={"wifi"} size={30} />,
    initial: {
      width: 18,
      height: 18,
      rotate: 0,
      x: 0,
      y: 0,
      z: 0,
      name: "",
      macId: "",
      gatewayClusterType: "",
      clusterId: "",
      plot: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  };

  getStyle() {
    return {
      ...super.getStyle(),
    };
  }

  getTransformMatrix({ rotate, x, y }) {
    return `rotate(${rotate} ${x} ${y})`;
  }

  render() {
    const { plot } = this.getObjectAttributes();

    return (
      <React.Fragment>
        <image
          width="18"
          height="18"
          href={gatewaySVG}
          style={this.getStyle()}
          {...this.getObjectAttributes()}
        />
        <image width="18" height="18" href={trackSvg} x={plot.x} y={plot.y} />
      </React.Fragment>
    );
  }
}
