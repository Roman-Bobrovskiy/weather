import axios from "axios";
import request from "./path.json";

let getData = (cityName) => {
  return axios.get(
    request.apiCall + request.query + cityName + request.API_KEY

    // "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=daily" +
    //   request.API_KEY
  );
};

let requests = {
  getData,
};
export default requests;
