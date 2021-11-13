import axios from "axios";
import request from "./path.json";

let getData = (cityName) => {
  console.log(request.apiCall + request.query + cityName + request.API_KEY);

  return axios.get(
    request.apiCall + request.query + cityName + request.API_KEY
  );
};

let getCityPageData = (lon, lat) => {
  return axios.get(
    request.dailyCall +
      "lat=" +
      lat +
      "&lon=" +
      lon +
      request.daily +
      request.API_KEY
  );
};

let requests = {
  getData,
  getCityPageData,
};
export default requests;
