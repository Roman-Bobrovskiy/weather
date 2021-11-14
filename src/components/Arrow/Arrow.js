import React from "react";
import PropTypes from "prop-types";

export default function Arrow({ deg }) {
  let svg = document.querySelector(`#svgImg${deg}`);
  console.log(svg);
  svg &&
    svg.setAttribute(
      "style",
      `-webkit-transform: rotate(${deg}deg);
      transform: rotate(${deg}deg);
      `
    );
  return (
    <svg
      id={`svgImg${deg}`}
      // className={styles.imgSvg}
      width="20px"
      height="20px"
      viewBox="0 0 16 16"
      // transform={`rotate(${deg})`}
    >
      <path
        d="M11.76 4.3L8.1 11.77 8 6.26l.45-.24 3.31-1.72M14 2L7.99 5.13 2 2.12 8.13 14 14 2z"
        fill="#eb6e4b"
      />
    </svg>
  );
}

Arrow.propTypes = {
  deg: PropTypes.number.isRequired,
};
