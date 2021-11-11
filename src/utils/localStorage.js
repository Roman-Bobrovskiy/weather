let add = (city) => {
  let cityArr = JSON.parse(window.localStorage.getItem("city")) || [];
  cityArr = [...cityArr.filter((el) => el.name !== city.name), city];
  window.localStorage.setItem("city", JSON.stringify(cityArr));
};

let remove = (city) => {
  console.log(city);
  let cityArr = JSON.parse(window.localStorage.getItem("city")) || [];
  cityArr = [
    ...cityArr.filter((el) => city.toLowerCase() !== el.name.toLowerCase()),
  ];

  window.localStorage.setItem("city", JSON.stringify(cityArr));
};

let localStorage = {
  add,
  remove,
};
export default localStorage;
