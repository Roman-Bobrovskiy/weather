import React from "react";
import HorlyWeather from "../components/HourlyWeather/HourlyWeather";

export default function CityPage(props) {
  return <HorlyWeather id={props.location.id} />;
}
