let timeLastUpdate = (data) => {
  let Data = new Date(data * 1000);
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

let time = (data) => {
  let Data = new Date(data * 1000);
  let Hour = Data.getHours();
  let Minutes = Data.getMinutes();

  let result = `${Hour}:${Minutes < 10 ? "0" + Minutes : Minutes}`;
  return result;
};

let timeCounter = {
  timeLastUpdate,
  time,
};

export default timeCounter;
