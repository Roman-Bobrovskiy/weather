import React from "react";

import HorlyWeather from "../components/HourlyWeather/HourlyWeather";
import Footer from "../components/Footer/Footer";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import InfoBox from "../components/InfoBox/InfoBox";

import styles from "./CityPage.module.css";

export default function CityPage(props) {
  return (
    <>
      <header>
        <div className={styles.wrapHeader}>
          <span>Weather forecast</span>
        </div>
      </header>
      <main>
        <div className={styles.wrapMain}>
          <CurrentWeather />
          <div className={styles.separator} />
          <HorlyWeather id={props.location.id} />
          <div className={styles.separator} />
          <InfoBox />
        </div>
      </main>
      <Footer />
    </>
  );
}
