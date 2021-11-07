import weatherActionsTypes from "./weatherActionsTypes";

let getCityData = (data) => ({
  type: weatherActionsTypes.ADD_CITY,
  payload: data,
});
let updWeather = (data) => ({
  type: weatherActionsTypes.UPD_WEATHER,
  payload: data,
});

let actionsTypes = {
  getCityData,
  updWeather,
};

export default actionsTypes;
