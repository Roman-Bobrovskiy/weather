import actionsTypes from "./weatherActionsTypes";
import { combineReducers } from "redux";
import localStorage from "../../utils/localStorage";

const initialState = {
  card: [],
  cityData: [],
  error: false,
  loading: false,
};

let cityWeatherData = (state = initialState.card, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_CITY:
      localStorage.add(payload.name);

      return [...state.filter((obj) => obj.name !== payload.name), payload];
    // return [...state, payload];

    case actionsTypes.REMOVE_CITY:
      return [...state.filter((stat) => stat.name !== payload)];

    case actionsTypes.UPD_WEATHER:
      let result = state.map((obj) => {
        return obj.name === payload.name ? payload : obj;
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
