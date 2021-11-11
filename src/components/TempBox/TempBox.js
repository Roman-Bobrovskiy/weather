import React from "react";

export default function TempBox({ temp }) {
  let liStyle;
  liStyle = {
    height: `3rem`,
    display: "flex",
  };

  let spanStyle;
  temp < 10 && temp > 0
    ? (spanStyle = {
        height: "max-content",
        margin: `  ${0} ${0} 0.${temp}rem `,
        border: "1px solid black",
        flex: "1 0",
      })
    : (spanStyle = {
        height: "max-content",
        margin: `  ${0} ${0} ${temp / 10}rem`,
        border: "1px solid black",
        flex: "1 0",
      });

  return (
    <li style={liStyle}>
      <span style={spanStyle}> {temp} °C </span>
    </li>
  );
}
