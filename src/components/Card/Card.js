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
  return (
    state.weather.card.length !== 0 && (
      <Row xs={1} md={2} className="g-3">
        <Col>
          {state.weather.card.map((e) => (
            <Card key={e.id}>
              <Card.Body>
                <Card.Title>
                  <Card.Text>
                    Last update {timeCounter.timeLastUpdate(e.dt)}
                  </Card.Text>
                  {e.name},{e.sys.country}
                </Card.Title>
                <Card.Text>
                  <Card.Img
                    variant="center"
                    src={url.imgUrl + e.weather[0].icon + ".png"}
                  />
                  {getTempInCelsius(e.main.temp)}°C
                </Card.Text>
                <Card.Text>
                  Feels like {getTempInCelsius(e.main.feels_like)}
                  °C {e.weather[0].main}
                </Card.Text>
                <Card.Text>
                  {wind.speed(e.wind.speed)} m/s{" "}
                  {wind.directionName(e.wind.deg)} {wind.direction(e.wind.deg)}
                </Card.Text>
                <Card.Text>Umidity {e.main.humidity}%</Card.Text>{" "}
                <Card.Text>Pressure {e.main.pressure}hPa</Card.Text>
                <Card.Text>Visibility {e.visibility / 1000}km</Card.Text>
                <Card.Text>
                  Sunrise {timeCounter.time(e.sys.sunrise)} Sunset{" "}
                  {timeCounter.time(e.sys.sunset)}
                </Card.Text>
                <Button variant="dark">update</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
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
