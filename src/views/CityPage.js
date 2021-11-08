import React, { useState, useEffect } from "react";
import requests from "../utils/request";

export default function CityPage(props) {
  const [cityData, setCityData] = useState([]);
  const [error, setError] = useState(false);
  const [loadingCityPage, setLoadingCityPage] = useState(false);

  useEffect(() => {
    setLoadingCityPage(true);
    props.location.state.weather.card.map(
      (obj) =>
        props.location.id === obj.id &&
        requests
          .getCityPageData(obj.coord.lon, obj.coord.lat)
          .then((elem) => setCityData({ ...elem.data, name: obj.name }))
          .catch((error) => setError(error))
          .finally(() => setLoadingCityPage(false))
    );
  }, [props.location.state.weather.card, props.location.id]);
  console.log(cityData);
  return <div>state</div>;
}
