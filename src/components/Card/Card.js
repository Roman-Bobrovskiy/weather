import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";

import url from "../../utils/path.json";
import timeCounter from "../../utils/getTime";
import wind from "../../utils/getWindDirection";
import { getTempInCelsius } from "../../utils/getTempInCelsius";

function Cards({ state }) {
  state.weather.card !== "" && console.log(state);

  return (
    state.weather.card !== "" && (
      <Card>
        <Card.Body>
          <Card.Title>
            <Card.Text>
              Last update{" "}
              {timeCounter.timeLastUpdate(state.weather.card.data.dt)}
            </Card.Text>
            {state.weather.card.data.name},{state.weather.card.data.sys.country}
          </Card.Title>
          <Card.Text>
            <Card.Img
              variant="center"
              src={
                url.imgUrl + state.weather.card.data.weather[0].icon + ".png"
              }
            />
            {getTempInCelsius(state.weather.card.data.main.temp)}°C
          </Card.Text>
          <Card.Text>
            Feels like{" "}
            {getTempInCelsius(state.weather.card.data.main.feels_like)}
            °C {state.weather.card.data.weather[0].main}
          </Card.Text>
          <Card.Text>
            {wind.speed(state.weather.card.data.wind.speed)} m/s{" "}
            {wind.directionName(state.weather.card.data.wind.deg)}{" "}
            {wind.direction(state.weather.card.data.wind.deg)}
          </Card.Text>
          <Card.Text>
            Umidity {state.weather.card.data.main.humidity}%
          </Card.Text>{" "}
          <Card.Text>
            Pressure {state.weather.card.data.main.pressure}hPa
          </Card.Text>
          <Card.Text>
            Visibility {state.weather.card.data.visibility / 1000}km
          </Card.Text>
          <Card.Text>
            Sunrise {timeCounter.time(state.weather.card.data.sys.sunrise)}{" "}
            Sunset {timeCounter.time(state.weather.card.data.sys.sunset)}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  );
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, null)(Cards);
