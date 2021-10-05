import React from "react";
import Radium from "radium";

import styles from "./styles";

const Column = ({ showIf = true, readOnly = false, ...props }) => {
  if (!showIf) {
    return <div style={styles.empty} />;
  }

  const onChange = (e) => {
    if (!readOnly) {
      props.onChange(e.target.value);
    }
  };

  return (
    <div style={[styles.column, props.style]}>
      {props.children || (
        <input
          disabled={readOnly}
          style={[styles.input, styles.integerInput, props.inputStyle]}
          value={props.value}
          onChange={onChange}
        />
      )}
      {props.label && (
        <div className="helpertext" style={styles.inputHelper}>
          {props.label}
        </div>
      )}
    </div>
  );
};

export default Radium(Column);
