let directionName = (data) => {
  const directions = ["↓", "↙", "←", "↖", "↑", "↗", "→", "↘"];
  data = data < 0 ? (data = 360 - (Math.abs(data) % 360)) : data % 360;
  return `${directions[(data / 45) | 0]}`;
};

let direction = (data) => {
  const degreeChar = String.fromCharCode(0xfeff00b0);
  let result = `${data}${degreeChar}`;
  return result;
};

let speed = (data) => {
  return Math.round(data);
};

let wind = {
  direction,
  directionName,
  speed,
};

export default wind;
