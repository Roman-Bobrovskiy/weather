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
          <span>weather forecast</span>
        </div>
      </header>
      <main>
        <CurrentWeather />
        <HorlyWeather id={props.location.id} />
        <InfoBox />
      </main>
      <Footer />
    </>
  );
}
