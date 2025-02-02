import React from "react";
import Radium from "radium";
import styles from "../panels/styles";

const Select = ({ style, options, name, value, onChange, ...rest }) => {
  const getOptions = () => {
    let clusterOptions = [];
    if (typeof options[0] === "string") {
      clusterOptions = options.map((data, index) => (
        <option key={index} value={data}>
          {data}
        </option>
      ));
    } else {
      clusterOptions = options.map(({ label, value }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ));
    }

    return (
      <React.Fragment>
        <option value="">Select Option</option>
        {clusterOptions}
      </React.Fragment>
    );
  };

  return (
    <select
      name={name}
      style={[styles.select, style]}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {getOptions()}
    </select>
  );
};

Select.defaultProps = {
  options: [],
  name: "",
};

export default Radium(Select);
