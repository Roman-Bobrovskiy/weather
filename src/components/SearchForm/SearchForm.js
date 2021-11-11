import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";
import requests from "../../utils/request";

import ModalWindow from "../Modal/ModalWindow";

function SearchForm({ state, handleSubmit, err, loading }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let localStorageData =
      JSON.parse(window.localStorage.getItem("city")) || [];
    localStorageData.map((obj) => handleSubmit({ ...obj }));
  }, [handleSubmit]);

  let handleChange = (event) => {
    setText(event.target.value);
  };

  let onhandleSubmit = (event) => {
    loading(true);
    event.preventDefault();
    requests
      .getData(text)
      .then((elem) => handleSubmit({ ...elem.data }))
      .catch((error) => err(true))
      .finally(() => loading(false));

    setText("");
  };

  return (
    <>
      <ModalWindow />
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
    </>
  );
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

let mapDispatchToProps = {
  handleSubmit: actionsTypes.getCityData,
  err: actionsTypes.error,
  loading: actionsTypes.loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
