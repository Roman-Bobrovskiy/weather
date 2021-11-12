import React from "react";
import { connect } from "react-redux";
import { getTempInCelsius } from "../../utils/getTempInCelsius";
import getTime from "../../utils/getTime";

function InfoBox({ cityData }) {
  return (
    <>
      {cityData.length !== 0 && (
        <div>
          <ul>
            <li> {cityData.current.weather[0].description} </li>
            <li>
              feels_like: {getTempInCelsius(cityData.current.feels_like)} °C
            </li>
            <li>dew_point: {getTempInCelsius(cityData.current.dew_point)}</li>
            <li>pressure: {cityData.current.pressure} hPa</li>
          </ul>
          <ul>
            <li>
              Length of the day:{" "}
              {getTime.lengthOfTheDay(
                cityData.current.sunrise,
                cityData.current.sunset
              )}
            </li>
            <li>humidity: {cityData.current.humidity} %</li>
            <li>uvi: {cityData.current.uvi} </li>
            <li>visibility: {cityData.current.visibility / 1000} km </li>
          </ul>
        </div>
      )}
    </>
  );
}

let mapStateToProps = (state) => {
  return state.weather;
};

export default connect(mapStateToProps, null)(InfoBox);
