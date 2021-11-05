import React, { useState } from "react";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";
import requests from "../../utils/request";

function SearchForm({ handleSubmit }) {
  const [text, setText] = useState("");

  let handleChange = (event) => {
    setText(event.target.value);
  };

  let onhandleSubmit = (event) => {
    event.preventDefault();
    requests.getData(text).then((elem) => handleSubmit({ ...elem.data }));

    setText("");
  };

  return (
    <form onSubmit={onhandleSubmit}>
      <label>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search city"
        ></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

let mapDispatchToProps = {
  handleSubmit: actionsTypes.getCityData,
};

export default connect(null, mapDispatchToProps)(SearchForm);
