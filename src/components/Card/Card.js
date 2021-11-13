import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";
import localStorage from "../../utils/localStorage";

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import Routes from "../Routes";
import requests from "../../utils/request";
import url from "../../utils/path.json";
import timeCounter from "../../utils/getTime";
import wind from "../../utils/getWindDirection";
import { getTempInCelsius } from "../../utils/getTempInCelsius";
import Arrow from "../Arrow/Arrow";
import styles from "./Card.module.css";

function Cards({ state, handleUpdate, handleRemove, err }) {
  const [check, setСheck] = useState("");
  const [update, setUpdate] = useState(false);

  //card update
  let handleChangeUpdate = (city, event) => {
    setUpdate(true);
    event.preventDefault();
    setСheck(city);
    requests
      .getData(city)
      .then((obj) => handleUpdate({ ...obj.data }))
      .catch((error) => err(true))
      .finally(() => setUpdate(false));
  };
  //remove card
  let handleChangeRemove = (city, event) => {
    event.preventDefault();
    localStorage.remove(city);
    handleRemove(city);
  };

  return (
    //card body
    state.weather.card.length !== 0 && (
      <>
        <Container className={styles.cardContainer}>
          <Row xs={1} sm={2} md={2} className={styles.row}>
            {state.weather.card.map((e) => (
              <NavLink
                key={e.id}
                className={styles.navLink}
                to={{
                  pathname: Routes.citypage,
                  id: e.id,
                  state: state,
                }}
              >
                <Card className={styles.card} key={e.id}>
                  {state.weather.loading ? (
                    <Spinner animation="grow" variant="info" />
                  ) : (
                    <Card.Body>
                      <Card.Title className={styles.cityCountry}>
                        <div className={styles.wrapBtn}>
                          <button
                            className={styles.cardBtn}
                            onClick={(event) =>
                              handleChangeUpdate(e.name, event)
                            }
                          >
                            {update && e.name === check ? (
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-clockwise"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                              </svg>
                            )}
                          </button>
                          <button
                            className={styles.cardBtn}
                            onClick={(event) =>
                              handleChangeRemove(e.name, event)
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-x-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </button>
                        </div>
                        <Card.Text className={styles.lustUpdate}>
                          Last update {timeCounter.timeLastUpdate(e.dt)}
                        </Card.Text>
                        {e.name}, {e.sys.country}
                      </Card.Title>
                      <Card.Text className={styles.temp}>
                        <Card.Img
                          variant="center"
                          src={url.imgUrl + e.weather[0].icon + ".png"}
                          alt={e.weather[0].main}
                        />
                        {getTempInCelsius(e.main.temp)}°C
                      </Card.Text>
                      <Card.Text className={styles.feelsLike}>
                        Feels like {getTempInCelsius(e.main.feels_like)}
                        °C {e.weather[0].main}
                      </Card.Text>
                      <ul className={styles.wrapInfoData}>
                        <li className={styles.infoData}>
                          {wind.speed(e.wind.speed)} m/s{" "}
                          <Arrow deg={e.wind.deg} />
                          {wind.direction(e.wind.deg)}
                        </li>
                        <li className={styles.infoData}>
                          Umidity: {e.main.humidity}%
                        </li>
                        <li className={styles.infoData}>
                          Pressure: {e.main.pressure}hPa
                        </li>
                        <li className={styles.infoData}>
                          Visibility: {e.visibility / 1000}km
                        </li>
                        <li className={styles.infoDataSun}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 28.17 28.17"
                            margin="0"
                          >
                            <path d="M14 20.01c-3.18 0-5.77-2.59-5.77-5.77S10.82 8.47 14 8.47s5.77 2.59 5.77 5.77-2.59 5.77-5.77 5.77zm0-10.47c-2.59 0-4.69 2.1-4.69 4.69s2.1 4.69 4.69 4.69 4.69-2.1 4.69-4.69S16.58 9.54 14 9.54zm7.46 12.93c-.19 0-.38-.07-.53-.22l-1.89-1.89c-.29-.29-.29-.77 0-1.05.14-.14.33-.22.53-.22s.39.08.53.22l1.89 1.89c.29.29.29.77 0 1.05-.14.15-.33.22-.53.22zm-14.95-.01c-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.05l1.89-1.89c.3-.29.75-.29 1.05-.01.15.15.22.34.22.54s-.07.39-.22.53l-1.89 1.89c-.13.14-.32.21-.52.21zm18.07-7.42h-2.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c.4 0 .72.31.74.7v.04c-.03.45-.36.76-.75.76zm-18.5 0H3.41c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c.4 0 .72.31.74.7v.04c-.01.45-.34.76-.75.76zM8.4 9.39c-.19 0-.38-.07-.53-.22L5.98 7.28c-.29-.29-.29-.77 0-1.05.28-.28.77-.28 1.05 0l1.89 1.89c.29.29.29.77 0 1.05-.14.15-.33.22-.52.22zm11.19 0c-.19 0-.38-.07-.53-.22-.14-.14-.22-.33-.22-.53s.08-.39.22-.53l1.89-1.89c.3-.29.75-.29 1.05-.01.3.3.3.77.01 1.06l-1.89 1.89c-.15.16-.35.23-.53.23zM14 7.09h-.04c-.21-.01-.39-.1-.53-.25-.13-.15-.2-.34-.19-.54V3.67c0-.41.34-.75.75-.75s.75.34.75.75v2.66c.01.2-.07.39-.21.54-.15.13-.33.22-.53.22zm0 18.48h-.04c-.21-.01-.39-.1-.53-.25-.13-.15-.2-.34-.19-.54v-2.63c0-.41.34-.75.75-.75s.75.34.75.75v2.66c.01.2-.07.39-.21.54-.15.14-.33.22-.53.22z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-up"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                          </svg>
                          {timeCounter.time(e.sys.sunrise)}{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-up"
                            viewBox="0 0 16 16"
                            transform="rotate(180)"
                            margin="0"
                          >
                            <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                          </svg>
                          {timeCounter.time(e.sys.sunset)}
                        </li>
                      </ul>
                    </Card.Body>
                  )}
                </Card>
              </NavLink>
            ))}
          </Row>
        </Container>
      </>
    )
  );
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

let mapDispatchToProps = {
  handleUpdate: actionsTypes.updWeather,
  handleRemove: actionsTypes.removeCityData,
  err: actionsTypes.error,
  loading: actionsTypes.loading,
};

Cards.propTypes = {
  state: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  err: PropTypes.func.isRequired,
  city: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
