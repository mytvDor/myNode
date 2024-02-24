// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

exports.add = (a, b) => {
  return a + b;
};

exports.sub = (a, b) => {
  return a - b;
};

// module.exports = { add, sub };
//module.export use only one time bcoz it may override not err
// you cant do this =>  module.exports = sub;
