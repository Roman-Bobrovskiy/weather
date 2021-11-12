let hScroll = (e) => {
  e.currentTarget.scrollLeft += e.deltaY;
};

let scroll = {
  hScroll,
};
export default scroll;
// let hScroll = (e) => {
//   console.log(e);
//   const ele = e.currentTarget;
//   ele.scrollLeft = e.screenX;

//   let dx = e.screenX - e.clientX;
//   ele.scrollLeft = ele.scrollLeft - dx;
// };

// export default hScroll;
