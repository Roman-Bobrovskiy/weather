import React from "react";
import { connect } from "react-redux";

function Card({ state }) {
  console.log(state);
  return (
    <div>
      <span>1</span>
      <h2>2</h2>
      <p>3</p>
      <ul>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
      </ul>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, null)(Card);
