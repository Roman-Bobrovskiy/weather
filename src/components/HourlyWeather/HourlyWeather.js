import React, { useEffect } from "react";
import { connect } from "react-redux";
import actionsTypes from "../../redux/weather/weatherActions";
import requests from "../../utils/request";
import timeCounter from "../../utils/getTime";
import { v4 as uuidv4 } from "uuid";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

import { getTempInCelsius } from "../../utils/getTempInCelsius";

function CityPage({ id, cityData, card, pageWeather, err, loading }) {
  useEffect(() => {
    card.map(
      (obj) =>
        id === obj.id &&
        cityData.length === 0 &&
        requests
          .getCityPageData(obj.coord.lon, obj.coord.lat)
          .then(loading(true))
          .then((elem) => pageWeather({ ...elem.data, name: obj.name }))
          .catch((error) => err(error.message))
          .finally(() => loading(false))
    );
  }, [pageWeather, id, card, cityData.length, err, loading]);

  return (
    <>
      <header>{cityData.length !== 0 && cityData.name} </header>
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
              {cityData.length !== 0 &&
                cityData.hourly.map((elem) => (
                  <Card.Body key={uuidv4()}>
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
  return state.weather;
};

let mapDispatchToProps = {
  pageWeather: actionsTypes.cityPageWeather,
  err: actionsTypes.error,
  loading: actionsTypes.loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
