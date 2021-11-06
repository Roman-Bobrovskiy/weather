export let getTempInCelsius = (data) => {
  let result = Math.round(data - 273.15);
  return result;
};
