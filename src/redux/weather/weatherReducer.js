import actionsTypes from "./weatherActionsTypes";
import { combineReducers } from "redux";

let cityArr = [];
let cityWeatherData = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_CITY:
      cityArr.push(...cityArr, payload);

      return { cityArr };

    default:
      return state;
  }
};

export default combineReducers({ card: cityWeatherData });
