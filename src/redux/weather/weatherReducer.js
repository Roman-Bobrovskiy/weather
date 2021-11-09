import actionsTypes from "./weatherActionsTypes";
import { combineReducers } from "redux";

const initialState = {
  card: [],
  cityData: [],
  error: false,
  loading: false,
};

let cityArr = [];

let cityWeatherData = (state = initialState.card, { type, payload }) => {
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

let cityPageData = (state = initialState.cityData, { type, payload }) => {
  switch (type) {
    case actionsTypes.CITY_PAGE_WEATHER:
      return payload;

    default:
      return state;
  }
};

let error = (state = initialState.error, { type, payload }) => {
  switch (type) {
    case actionsTypes.ERROR:
      return payload;
    default:
      return state;
  }
};

let loading = (state = initialState.loading, { type, payload }) => {
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
  error: error,
  loading: loading,
});
