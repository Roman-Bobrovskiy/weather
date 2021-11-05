import actionsTypes from "./weatherActionsTypes";
import { combineReducers } from "redux";

let cityWeatherData = (state = "", { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_CITY:
      return { ...state, data: payload };

    default:
      return state;
  }
};

export default combineReducers({ card: cityWeatherData });
