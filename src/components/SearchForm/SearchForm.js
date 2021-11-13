import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";
import requests from "../../utils/request";
import styles from "./SearchForm.module.css";

import ModalWindow from "../Modal/ModalWindow";

function SearchForm({ handleSubmit, err, loading }) {
  const [text, setText] = useState("");

  //get local stoeage data for cards
  useEffect(() => {
    let localStorageData =
      JSON.parse(window.localStorage.getItem("city")) || [];
    localStorageData.map((obj) => handleSubmit({ ...obj }));
  }, [handleSubmit]);

  let handleChange = (event) => {
    setText(event.target.value);
  };

  //add new cards
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
    // search
    <>
      <ModalWindow />
      <form className={styles.searchFrom} onSubmit={onhandleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search city"
        ></input>

        <button className={styles.searchBtn} type="submit">
          Search
        </button>
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

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  err: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
