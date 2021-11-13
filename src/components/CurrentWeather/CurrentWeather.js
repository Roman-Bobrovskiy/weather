import React from "react";
import { connect } from "react-redux";
import { getTempInCelsius } from "../../utils/getTempInCelsius";
import timeCounter from "../../utils/getTime";

import styles from "./CurrentWeather.module.css";

function CurrentWeather({ cityData }) {
  return (
    // current weather for city page (up part)
    <>
      {cityData.length !== 0 && (
        <div className={styles.wrapCurrentWeather}>
          <p className={styles.cityName}>{cityData.name}</p>
          <p className={styles.currentTemp}>
            {getTempInCelsius(cityData.current.temp)} °
          </p>
          <div className={styles.boxSun}>
            <p>Now</p>
            <p className={styles.infoDataSun}>
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
              {timeCounter.time(cityData.current.sunrise)}{" "}
              <svg
                cityName={styles.svgArrow}
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
              {timeCounter.time(cityData.current.sunset)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

let mapStateToProps = (state) => {
  return state.weather;
};

export default connect(mapStateToProps, null)(CurrentWeather);
