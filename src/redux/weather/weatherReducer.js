import actionsTypes from "./weatherActionsTypes";
import { combineReducers } from "redux";

let cityArr = [];
let cityWeatherData = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_CITY:
      cityArr = [...state, payload];

      return cityArr.length === 1
        ? [...cityArr]
        : [...state, ...cityArr.filter((stat) => stat.name === payload.name)];

    case actionsTypes.UPD_WEATHER:
      let result = state.map((elem) => {
        return elem.name === payload.name ? payload : elem;
      });

      return result;

    default:
      return state;
  }
};

export default combineReducers({ card: cityWeatherData });
