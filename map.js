// FUNCTION IMPLEMENTATION
// Our map function will take in two arguments:
// An array to map
// A callback function
// map: a function that returns a new array based on the results of the callback function
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;