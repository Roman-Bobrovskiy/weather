import actionsTypes from "./weatherActionsTypes";
import { combineReducers } from "redux";

let cityWeatherData = (state = [], { type, payload }) => {
  let cityArr = [];
  switch (type) {
    case actionsTypes.ADD_CITY:
      cityArr = [...cityArr, payload];

      return { ...state, cityArr };

    default:
      return state;
  }
};

export default combineReducers({ card: cityWeatherData });
