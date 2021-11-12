import React, { useEffect } from "react";
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

function CityPage({ id, cityData, card, pageWeather, err, loading }) {
  useEffect(() => {
    card.map(
      (obj) =>
        id === obj.id &&
        cityData.length === 0 &&
        requests
          .getCityPageData(obj.coord.lon, obj.coord.lat)
          .then(loading(true))
          .then((elem) => pageWeather({ ...elem.data, name: obj.name }))
          .catch((error) => err(error.message))
          .finally(() => loading(false))
    );
  }, [pageWeather, id, card, cityData.length, err, loading]);

  useEffect(() => pageWeather([]), [pageWeather]);

  return (
    <>
      <div className={styles.wrapHourlyWeather}>
        <span className={styles.cityName}>
          {cityData.length !== 0 && cityData.name}{" "}
        </span>

        <div
          onWheel={(e) => scroll.hScroll(e)}
          id="scroll_container"
          className={styles.wrapCards}
        >
          {cityData.length !== 0 &&
            cityData.hourly.map((elem) => (
              <ul key={uuidv4()} className={styles.hourlyWeatherCard}>
                <li className={styles.cardItem}>
                  {timeCounter.timeWeekDay(elem.dt)}
                </li>
                <li className={styles.cardItem}>
                  <img
                    src={url.imgUrl + elem.weather[0].icon + ".png"}
                    alt={elem.weather[0].main}
                  ></img>
                </li>
                <li className={styles.boxTempCardItem}>
                  <TempBox temp={getTempInCelsius(elem.temp)} />
                </li>
                <li className={styles.cardItem}>
                  Feels like {getTempInCelsius(elem.feels_like)} °C
                </li>
                <li className={styles.cardItem}>
                  <Arrow deg={elem.wind_deg} />
                  {wind.speed(elem.wind_speed)} m/s
                </li>
                <li className={styles.cardItem}>
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
  err: actionsTypes.error,
  loading: actionsTypes.loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
