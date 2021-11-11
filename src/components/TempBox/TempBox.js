import React from "react";

export default function TempBox({ temp }) {
  let liStyle;
  liStyle = {
    position: "relative",
    width: "100%",
  };

  let spanStyle;
  temp < 10 && temp > 0
    ? (spanStyle = {
        position: "relative",
        display: "inline-block",
        height: "max-content",
        bottom: `${temp}px`,
        left: "0",
        border: "1px solid black",
        display: "flex",
        width: "100%",
      })
    : (spanStyle = {
        position: "relative",
        display: "inline-block",
        height: "max-content",
        bottom: `${temp}px`,
        border: "1px solid black",
        display: "flex",
        width: "100%",
      });

  return (
    <div style={liStyle}>
      <span style={spanStyle}> {temp} °C </span>
    </div>
  );
}
