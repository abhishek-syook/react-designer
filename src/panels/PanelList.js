import React, { Component } from "react";
import Radium from "radium";

import styles from "./styles";
import Icon from "../Icon";

const PanelList = ({ ...props }) => {
  
  let { objectComponent, onObjectSelect } = props;

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
        <Panel key={i} {...props} />
      ))}
    </div>
  );
};

export default Radium(PanelList);
