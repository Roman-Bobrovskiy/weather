import weatherActionsTypes from "./weatherActionsTypes";

let getCityData = (data) => ({
  type: weatherActionsTypes.ADD_CITY,
  payload: data,
});

let actionsTypes = {
  getCityData,
};

export default actionsTypes;
