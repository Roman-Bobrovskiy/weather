let localStorage = (city) => {
  let cityArr = JSON.parse(window.localStorage.getItem("city")) || [];

  cityArr.length === 0
    ? (cityArr = [{ city }])
    : (cityArr = [...cityArr, { city }]);

  window.localStorage.setItem("city", JSON.stringify(cityArr));
};
export default localStorage;
