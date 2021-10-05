import React from "react";
import Radium from "radium";
import ObjectItem from "./ObjectItem";
import styles from "../styles";

const ObjectList = ({ objects, onChange, onObjectSelect, ...rest }) => {
  return (
    <div>
      <div style={styles.panelHeader}>
        <strong style={styles.propertyTitle}>Object List</strong>
      </div>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        {objects.map((obj, index) => (
          <ObjectItem
            key={index}
            {...obj}
            {...rest}
            onClick={() => onObjectSelect(index)}
            onChange={(data) => onChange(index, data)}
          />
        ))}
      </div>
    </div>
  );
};

export default Radium(ObjectList);
