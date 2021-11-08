import weatherActionsTypes from "./weatherActionsTypes";

let getCityData = (data) => ({
  type: weatherActionsTypes.ADD_CITY,
  payload: data,
});

let updWeather = (data) => ({
  type: weatherActionsTypes.UPD_WEATHER,
  payload: data,
});
let cityPageWeather = (data) => ({
  type: weatherActionsTypes.CITY_PAGE_WEATHER,
  payload: data,
});

let loading = (data) => ({
  type: weatherActionsTypes.LOADING,
  payload: data,
});

let actionsTypes = {
  getCityData,
  updWeather,
  cityPageWeather,
  loading,
};

export default actionsTypes;
