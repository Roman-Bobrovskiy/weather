let hScroll = (e) => {
  e.currentTarget.scrollLeft += e.deltaY;
};

let scroll = {
  hScroll,
};
export default scroll;
