import Radium from "radium";
import React from "react";
import styles from "../panels/styles";

const Button = ({ style, name, onClick, ...props }) => {
  let _onClick = (e, ...args) => {
    e.preventDefault();
    onClick(...args);
  };

  return (
    <button name={name} style={[styles.button, style]} onClick={_onClick}>
      {props.children}
    </button>
  );
};

export default Radium(Button);
