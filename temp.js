// console.log("hi node");

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

// console.log(exports.hi(2, 4));
module.exports = {
  add,
  sub,
};
