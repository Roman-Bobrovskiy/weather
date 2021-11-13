import React, { useEffect } from "react";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";

import requests from "../../utils/request";
import url from "../../utils/path.json";
import localStorage from "../../utils/localStorage";

import { v4 as uuidv4 } from "uuid";
import { getTempInCelsius } from "../../utils/getTempInCelsius";
import wind from "../../utils/getWindDirection";
import timeCounter from "../../utils/getTime";
import Arrow from "../Arrow/Arrow";
import TempBox from "../../components/TempBox/TempBox";
import scroll from "../../utils/hScroll";

import styles from "./HourlyWeather.module.css";

function CityPageHorly({
  id,
  cityData,
  card,
  pageWeather,
  handleSubmit,
  err,
  loading,
}) {
  useEffect(() => {
    let localStorageData = JSON.parse(window.localStorage.getItem("city"));
    localStorageData.map((obj) => handleSubmit({ ...obj }));
    id && localStorage.addCityId(id);
  }, [handleSubmit, id]);

  useEffect(() => {
    let lsId = JSON.parse(window.localStorage.getItem("cityData"));
    card.map(
      (obj) =>
        lsId === obj.id &&
        cityData.length === 0 &&
        requests
          .getCityPageData(obj.coord.lon, obj.coord.lat)
          .then(loading(true))
          .then((elem) => pageWeather({ ...elem.data, name: obj.name, id: id }))
          .catch((error) => err(error.message))
          .finally(() => loading(false))
    );
  }, [pageWeather, id, card, cityData.length, err, loading]);

  useEffect(() => {
    pageWeather([]);
  }, [pageWeather]);

  return (
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

export default connect(mapStateToProps, mapDispatchToProps)(CityPageHorly);
