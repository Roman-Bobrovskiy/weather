let timeLastUpdate = (data) => {
  let Data = new Date(data * 1000);
  // let Data = new Date();
  let Year = Data.getFullYear();
  let Month = Data.getMonth();
  let Day = Data.getDate();
  let Hour = Data.getHours();
  let Minutes = Data.getMinutes();

  let result = `${Year}.${Month < 10 ? "0" + Month : Month}.${
    Day < 10 ? "0" + Day : Day
  } at ${Hour}:${Minutes < 10 ? "0" + Minutes : Minutes}`;
  return result;
};

let timeWeekDay = (data) => {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let Data = new Date(data * 1000);
  let Day = Data.getDay();
  let Hour = Data.getHours();
  let Minutes = Data.getMinutes();
  let result = `${days[Day]} ${Hour}:${Minutes < 10 ? "0" + Minutes : Minutes}`;
  return result;
};

let time = (data) => {
  let Data = new Date(data * 1000);
  let Hour = Data.getHours();
  let Minutes = Data.getMinutes();

  let result = `${Hour}:${Minutes < 10 ? "0" + Minutes : Minutes}`;
  return result;
};

let lengthOfTheDay = (sunrise, sunset) => {
  let different = new Date(sunset) - new Date(sunrise);
  let Data = new Date(different * 1000);
  let Hour = Data.getHours() - 3;
  let Minutes = Data.getMinutes();

  let result = `${Hour}:${Minutes < 10 ? "0" + Minutes : Minutes}`;

  return result;
};

let timeCounter = {
  timeLastUpdate,
  timeWeekDay,
  time,
  lengthOfTheDay,
};

export default timeCounter;
