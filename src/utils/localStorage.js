let add = (city) => {
  let cityArr = JSON.parse(window.localStorage.getItem("city")) || [];
  cityArr = [...cityArr.filter((el) => el !== city), city];
  window.localStorage.setItem("city", JSON.stringify(cityArr));
};

let remove = (city) => {
  let cityArr = JSON.parse(window.localStorage.getItem("city")) || [];
  cityArr = [...cityArr.filter((el) => city !== el)];

  window.localStorage.setItem("city", JSON.stringify(cityArr));
};

let addCityId = (obj) => {
  let cityPage = JSON.parse(window.localStorage.getItem("cityData")) || [];
  cityPage = obj;
  window.localStorage.setItem("cityData", JSON.stringify(cityPage));
};

let localStorage = {
  add,
  remove,
  addCityId,
};
export default localStorage;
