import React from "react";

export default function Arrow({ deg }) {
  return (
    <svg
      className="svgArrow"
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 16 16"
      transform={`rotate(${deg})`}
    >
      <path
        d="M11.76 4.3L8.1 11.77 8 6.26l.45-.24 3.31-1.72M14 2L7.99 5.13 2 2.12 8.13 14 14 2z"
        fill="#eb6e4b"
      />
    </svg>
  );
}
