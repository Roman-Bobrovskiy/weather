import weatherActionsTypes from "./weatherActionsTypes";

let getCityData = (data) => ({
  type: weatherActionsTypes.ADD_CITY,
  payload: data,
});

let cityPageWeather = (data) => ({
  type: weatherActionsTypes.CITY_PAGE_WEATHER,
  payload: data,
});

let updWeather = (data) => ({
  type: weatherActionsTypes.UPD_WEATHER,
  payload: data,
});

let loading = (data) => ({
  type: weatherActionsTypes.LOADING,
  payload: data,
});

let error = (data) => ({
  type: weatherActionsTypes.ERROR,
  payload: data,
});

let actionsTypes = {
  getCityData,
  updWeather,
  cityPageWeather,
  error,
  loading,
};

export default actionsTypes;
