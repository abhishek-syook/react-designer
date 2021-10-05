import React from "react";

const Label = ({ x, y, label }) => {
  if (!label) {
    return null;
  }

  return (
    <text x={x} y={y} style={{ fontSize: 12 }}>
      {label}
    </text>
  );
};

export default Label;
