import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Routes from "../Routes";
import requests from "../../utils/request";
import url from "../../utils/path.json";
import timeCounter from "../../utils/getTime";
import wind from "../../utils/getWindDirection";
import { getTempInCelsius } from "../../utils/getTempInCelsius";
import styles from "./Card.module.css";

function Cards({ state, handleUpdate }) {
  const [check, setСheck] = useState("");
  const [error, setError] = useState(false);
  const [update, setUpdate] = useState(false);

  let handleChangeUpdate = (data, event) => {
    console.log("updBtn");
    event.preventDefault();
    setСheck(data);
    setUpdate(true);

    requests
      .getData(data)
      .then((elem) => handleUpdate({ ...elem.data }))
      .catch((error) => setError(error))
      .finally(() => setUpdate(false));
  };

  return (
    console.log(state.weather.card),
    state.weather.card.length !== 0 && (
      <>
        <Container>
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
                        <Card.Text className={styles.lustUpdate}>
                          Last update {timeCounter.timeLastUpdate(e.dt)}
                        </Card.Text>
                        {e.name}, {e.sys.country}
                      </Card.Title>
                      <Card.Text className={styles.temp}>
                        <Card.Img
                          variant="center"
                          src={url.imgUrl + e.weather[0].icon + ".png"}
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
                          {wind.directionName(e.wind.deg)}{" "}
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
                        <li className={styles.infoData}>
                          Sunrise: {timeCounter.time(e.sys.sunrise)} Sunset:{" "}
                          {timeCounter.time(e.sys.sunset)}
                        </li>
                      </ul>
                      <Button
                        onClick={(event) => handleChangeUpdate(e.name, event)}
                        variant="outline-info"
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
                          "update"
                        )}
                      </Button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
