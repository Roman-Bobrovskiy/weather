import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";

import requests from "../../utils/request";
import url from "../../utils/path.json";

import { v4 as uuidv4 } from "uuid";
import { getTempInCelsius } from "../../utils/getTempInCelsius";
import wind from "../../utils/getWindDirection";
import timeCounter from "../../utils/getTime";
import Arrow from "../Arrow/Arrow";
import TempBox from "../../components/TempBox/TempBox";
import scroll from "../../utils/hScroll";

import styles from "./HourlyWeather.module.css";

function CityPageHorly({ id, cityData, card, pageWeather, err, loading }) {
  //get data object for city page
  useEffect(() => {
    card.map(
      (obj) =>
        id === obj.id &&
        cityData.length === 0 &&
        requests
          .getCityPageData(obj.coord.lon, obj.coord.lat)
          .then(loading(true))
          .then((elem) => pageWeather({ ...elem.data, name: obj.name, id: id }))
          .catch((error) => err(error.message))
          .finally(() => loading(false))
    );
  }, [pageWeather, id, card, cityData.length, err, loading]);

  //clean state
  useEffect(() => {
    pageWeather([]);
  }, [pageWeather]);

  return (
    //body hourly weather box
    <>
      <div className={styles.wrapHourlyWeather}>
        <div
          onWheel={(e) => scroll.hScroll(e)}
          id="scroll_container"
          className={styles.wrapCards}
        >
          {cityData.length !== 0 &&
            cityData.hourly.map((elem) => (
              <ul key={uuidv4()} className={styles.hourlyWeatherCard}>
                <li className={styles.cardList}>
                  {timeCounter.timeWeekDay(elem.dt)}
                </li>
                <li className={styles.cardList}>
                  <img
                    src={url.imgUrl + elem.weather[0].icon + ".png"}
                    alt={elem.weather[0].main}
                  ></img>
                </li>
                <li className={styles.boxTempCardItem}>
                  <TempBox temp={getTempInCelsius(elem.temp)} />
                </li>
                <li className={styles.cardList}>
                  Feels like {getTempInCelsius(elem.feels_like)} °C
                </li>
                <li className={styles.cardList}>
                  <Arrow deg={elem.wind_deg} />
                  {wind.speed(elem.wind_speed)} m/s
                </li>
                <li className={styles.cardList}>
                  gusts to {wind.speed(elem.wind_gust)} m/s
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
}

let mapStateToProps = (state) => {
  return state.weather;
};

let mapDispatchToProps = {
  pageWeather: actionsTypes.cityPageWeather,
  handleSubmit: actionsTypes.getCityData,
  err: actionsTypes.error,
  loading: actionsTypes.loading,
};

CityPageHorly.propTypes = {
  id: PropTypes.number,
  card: PropTypes.array,
  pageWeather: PropTypes.func.isRequired,
  err: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPageHorly);
