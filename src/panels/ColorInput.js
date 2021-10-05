import React from "react";

const ColorInput = ({ value, onChange }) => {
  return (
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default ColorInput;
