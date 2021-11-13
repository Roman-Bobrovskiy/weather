import React from "react";
import PropTypes from "prop-types";

export default function TempBox({ temp }) {
  //change the position and color of the block depending on the temperature
  let liStyle;
  liStyle = {
    width: "100%",
  };

  let spanStyle;
  temp < 10 && temp > 0
    ? (spanStyle = {
        position: "relative",
        height: "max-content",
        bottom: `${temp / 1.7}px`,
        left: "0",
        border: "1px solid rgba(0, 0, 0, 0.125)",
        display: "flex",
        background:
          temp > 0
            ? `rgba(255, 0, 0, 0.0${temp}`
            : `rgba(0, 0, 255, 0.${-temp}`,
      })
    : (spanStyle = {
        position: "relative",
        height: "max-content",
        bottom: `${temp / 1.7}px`,
        border: `1px solid rgba(0, 0, 0, 0.125)`,
        display: "flex",
        background:
          temp > 0
            ? `rgba(255, 0, 0, 0.${temp}`
            : `rgba(0, 0, 255, ${-temp / 10}`,
      });

  return (
    <div style={liStyle}>
      <span style={spanStyle}> {temp} °C </span>
    </div>
  );
}

TempBox.propTypes = {
  temp: PropTypes.number.isRequired,
};
