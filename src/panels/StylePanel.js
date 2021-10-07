import React from "react";
import _ from "lodash";

import Panel from "./Panel";

import styles from "./styles";
import PropertyGroup from "./PropertyGroup";
import Columns from "./Columns";
import Column from "./Column";
import ColorInput from "./ColorInput";
import { TYPES } from "../constants";
import Select from "../widgets/Select";

export default class StylePanel extends Panel {
  modes = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
  ];

  render() {
    let { object } = this.props;

    if (object.elementType === TYPES.GATEWAY) {
      return null;
    }

    return (
      <PropertyGroup>
        <Columns label="Fill">
          <Column>
            <ColorInput
              value={object.fill}
              onChange={this.props.onChange.bind(this, "fill")}
            />
          </Column>
          <Column label="Opacity">
            <input
              style={[[styles.input, styles.integerInput], { width: 30 }]}
              onChange={(e) =>
                this.props.onChange("fillOpacity", e.target.value)
              }
              value={object.fillOpacity}
            />
          </Column>
        </Columns>
        <Columns label="Stroke">
          <Column>
            <ColorInput
              value={object.stroke}
              onChange={this.props.onChange.bind(this, "stroke")}
            />
          </Column>
          <Column label="width">
            <input
              style={[[styles.input, styles.integerInput], { width: 30 }]}
              onChange={(e) =>
                this.props.onChange("strokeWidth", e.target.value)
              }
              value={object.strokeWidth}
            />
          </Column>
          <Column showIf={_.has(object, "radius")} label="radius">
            <input
              style={[styles.input, styles.integerInput, { width: 30 }]}
              onChange={(e) => this.props.onChange("radius", e.target.value)}
              value={object.radius}
            />
          </Column>
        </Columns>
        <Columns label="Blending">
          <Column>
            <Select
              name="Blending"
              value={object.blendMode}
              options={this.modes}
              onChange={(e) => this.props.onChange("blendMode", e.target.value)}
            />
          </Column>
        </Columns>
      </PropertyGroup>
    );
  }
}
