import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import url from "../../utils/path.json";
import timeCounter from "../../utils/getTime";
import wind from "../../utils/getWindDirection";
import { getTempInCelsius } from "../../utils/getTempInCelsius";

function Cards({ state }) {
  state.weather.card.length !== 0 &&
    console.log(state.weather.card.cityArr.map((elem) => elem.name));

  return (
    state.weather.card.length !== 0 && (
      <Row xs={1} md={2} className="g-4">
        {state.weather.card.cityArr.map((e) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <Card.Text>
                    Last update{" "}
                    {timeCounter.timeLastUpdate(e.weather.card.data.dt)}
                  </Card.Text>
                  {e.weather.card.data.name},{e.weather.card.data.sys.country}
                </Card.Title>
                <Card.Text>
                  <Card.Img
                    variant="center"
                    src={
                      url.imgUrl + e.weather.card.data.weather[0].icon + ".png"
                    }
                  />
                  {getTempInCelsius(e.weather.card.data.main.temp)}°C
                </Card.Text>
                <Card.Text>
                  Feels like{" "}
                  {getTempInCelsius(e.weather.card.data.main.feels_like)}
                  °C {e.weather.card.data.weather[0].main}
                </Card.Text>
                <Card.Text>
                  {wind.speed(e.weather.card.data.wind.speed)} m/s{" "}
                  {wind.directionName(e.weather.card.data.wind.deg)}{" "}
                  {wind.direction(e.weather.card.data.wind.deg)}
                </Card.Text>
                <Card.Text>
                  Umidity {e.weather.card.data.main.humidity}%
                </Card.Text>{" "}
                <Card.Text>
                  Pressure {e.weather.card.data.main.pressure}hPa
                </Card.Text>
                <Card.Text>
                  Visibility {e.weather.card.data.visibility / 1000}km
                </Card.Text>
                <Card.Text>
                  Sunrise {timeCounter.time(e.weather.card.data.sys.sunrise)}{" "}
                  Sunset {timeCounter.time(e.weather.card.data.sys.sunset)}
                </Card.Text>
                <Button variant="dark">update</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
  );
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, null)(Cards);
