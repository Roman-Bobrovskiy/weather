let add = (city) => {
  let cityArr = JSON.parse(window.localStorage.getItem("city")) || [];
  cityArr.length === 0
    ? (cityArr = [{ city }])
    : (cityArr = [...cityArr.filter((el) => el.city !== city), { city }]);

  window.localStorage.setItem("city", JSON.stringify(cityArr));
};

let remove = (city) => {
  let cityArr = JSON.parse(window.localStorage.getItem("city")) || [];

  cityArr = [
    ...cityArr.filter((el) => city.toLowerCase() !== el.city.toLowerCase()),
  ];

  window.localStorage.setItem("city", JSON.stringify(cityArr));
};

let localStorage = {
  add,
  remove,
};
export default localStorage;
