import actionsTypes from "./weatherActionsTypes";
import { combineReducers } from "redux";

const initialState = { card: [], cityData: [], loading: false };

let cityArr = [];

let cityWeatherData = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_CITY:
      cityArr = [...state, payload];

      return cityArr.length === 1
        ? [...cityArr]
        : [...state, ...cityArr.filter((stat) => stat.name === payload.name)];

    case actionsTypes.UPD_WEATHER:
      console.log("UPD_WEATHER");
      let result = state.map((elem) => {
        return elem.name === payload.name ? payload : elem;
      });

      return result;

    default:
      return state;
  }
};

let cityPageData = (state = [], { type, payload }) => {
  console.log("cityPageData");
  switch (type) {
    case actionsTypes.CITY_PAGE_WEATHER:
      return payload;

    default:
      return state;
  }
};

let loading = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.LOADING:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  card: cityWeatherData,
  cityData: cityPageData,
  loading: loading,
});
