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
  speed,
};

export default wind;
