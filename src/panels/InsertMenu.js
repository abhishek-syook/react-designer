import React, { Component } from "react";
import Radium from "radium";

class InsertMenu extends Component {
  render() {
    let { currentTool, tools, onSelect, type, onTypeChange } = this.props;

    let keys = Object.keys(tools);

    return (
      <div style={styles.insertMenu}>
        <div style={{ display: "flex" }}>
          {["map", "track"].map((key) => (
            <div
              key={key}
              style={[
                styles.tabBar,
                {
                  background: type === key ? "#1b1c1d" : "none",
                  color: type === key ? "#fff" : "black",
                },
              ]}
              onClick={() => onTypeChange(key)}
            >
              {key}
            </div>
          ))}
        </div>
        <h4>Drawing</h4>
        <ul style={styles.toolBox}>
          {keys.map((elementType, i) => (
            <li
              className={
                currentTool === elementType
                  ? "insertmenu insertmenuactive"
                  : "insertmenu"
              }
              style={[
                styles.toolBoxItem,
                currentTool === elementType && styles.currentToolboxItem,
              ]}
              onMouseDown={onSelect.bind(this, elementType)}
              key={i}
            >
              <span style={{ ...styles.mainIcon }}>
                {tools[elementType].meta.icon}
              </span>
              {elementType}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  insertMenu: {
    padding: 20,
    textTransform: "capitalize",
    backgroundColor: "#ebebeb",
  },
  toolBox: {
    margin: 0,
    padding: 0,
  },
  toolBoxItem: {
    listStyle: "none",
    padding: 5,
    marginTop: 2,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 8,
    ":hover": {
      background: "#dcd8d8",
    },
  },
  currentToolboxItem: {
    background: "#dcd8d8",
  },
  mainIcon: {
    padding: "2px 5px",
    borderBottom: "1px solid #e0e0e0",
  },
  tabBar: {
    textTransform: "capitalize",
    padding: "5px 10px",
    lineHeight: "1.75",
    padding: "3px 9px",
    fontWeight: 600,
    borderBottom: "2px solid #1b1c1d",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    cursor: "pointer",
    fontSize: 12,
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
  },
};

export default Radium(InsertMenu);
