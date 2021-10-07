import Radium from "radium";
import React from "react";
import styles from "../panels/styles";

const Input = ({ type, style, name, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      style={[styles.input, style]}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  type: "text",
  name: "",
};

export default Radium(Input);
