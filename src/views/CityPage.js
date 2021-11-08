import React, { useState, useEffect } from "react";
import requests from "../utils/request";

export default function CityPage(props) {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    props.location.state.weather.card.map(
      (obj) =>
        props.location.id === obj.id &&
        requests
          .getCityPageData(obj.coord.lon, obj.coord.lat)
          .then((elem) => setCityData({ ...elem.data }))
      // .catch((error) => setError(error))
      // .finally(() => setUpdate(false))
    );
  }, []);

  return <div>state</div>;
}
