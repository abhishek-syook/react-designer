import React, { Component } from "react";
import Radium from "radium";
import { Portal } from "react-portal";

import styles from "./styles";
import Button from "./Button";
import Icon from "../Icon";
class PanelList extends Component {
  render() {
    let { objectComponent, onObjectSelect } = this.props;

    return (
      <div style={[styles.propertyPanel]}>
        <div style={styles.panelHeader}>
          <Icon
            icon="back"
            active
            onClick={() => onObjectSelect(null)}
            size={24}
            style={{ cursor: "pointer", marginRight: 5 }}
          />
          <strong style={styles.propertyTitle}>Item Properties</strong>
        </div>
        {objectComponent.panels.map((Panel, i) => (
          <Panel key={i} {...this.props} />
        ))}
      </div>
    );
  }
}

export default Radium(PanelList);
