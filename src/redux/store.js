import { createStore, combineReducers } from "redux";
import weatherReducer from "./weather/weatherReducer";

let rootReducer = combineReducers({
  weather: weatherReducer,
});

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
