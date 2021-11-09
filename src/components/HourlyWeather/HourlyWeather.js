import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";
import requests from "../../utils/request";
import timeCounter from "../../utils/getTime";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

import { getTempInCelsius } from "../../utils/getTempInCelsius";

function CityPage({ id, state, pageWeather }) {
  const [error, setError] = useState(false);
  const [loadingCityPage, setLoadingCityPage] = useState(false);

  useEffect(() => {
    state.weather.card.map(
      (obj) =>
        id === obj.id &&
        state.weather.cityData.length === 0 &&
        requests
          .getCityPageData(obj.coord.lon, obj.coord.lat)
          .then((elem) => pageWeather({ ...elem.data, name: obj.name }))
          .catch((error) => setError(error))
          .finally(() => setLoadingCityPage(false))
    );
  }, [pageWeather, id, state.weather.card, state.weather.cityData.length]);

  return (
    <>
      <header>
        {state.weather.cityData.length !== 0 && state.weather.cityData.name}{" "}
      </header>
      <main>
        <div>
          <Card>
            <Row xs={7} sm={7} md={7}>
              {/* <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#first">Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header> */}
              {state.weather.cityData.length !== 0 &&
                state.weather.cityData.hourly.map((elem) => (
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        {timeCounter.time(elem.dt)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {getTempInCelsius(elem.temp)}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                ))}
            </Row>
          </Card>
        </div>
      </main>
    </>
  );
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

let mapDispatchToProps = {
  pageWeather: actionsTypes.cityPageWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
