const assertArraysEqual = require('./assertArraysEqual');

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


// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']); // => should PASS
assertArraysEqual(map(words, word => word + " " + word), ['ground ground', 'control control', 'to to', 'major major', 'tom tom']); // => should PASS
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]); // => should PASS

module.exports = map;