import actionsTypes from "./weatherActionsTypes";
import { combineReducers } from "redux";

let cityArr = [];
let cityWeatherData = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_CITY:
      cityArr = [...state, payload];

      if (cityArr.length === 1) {
        return [...cityArr];
      } else
        return [
          ...state,
          ...cityArr.filter((stat) => stat.name === payload.name),
        ];

    default:
      return state;
  }
};

export default combineReducers({ card: cityWeatherData });
