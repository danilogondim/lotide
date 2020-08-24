// FUNCTION IMPLEMENTATION
// a function that returns a slice of a given array with elements taken from the beginning until the callback function returns a truthy value.

const takeUntil = (array, callback) => {
  const output = [];
  for (const item of array) {
    if (!callback(item)) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
};

// TEST CODE
const assertArraysEqual = require('./assertArraysEqual');

// tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["chocolate","chocolate", "chocolate", "raisin"];
const data4 = ["chocolate", "raisin"];
const data5 = ["raisin"];

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(takeUntil(data3, x => x === 'raisin'), ["chocolate","chocolate", "chocolate"]);
assertArraysEqual(takeUntil(data4, x => x === 'raisin'), ["chocolate"]);
assertArraysEqual(takeUntil(data5, x => x === 'raisin'), []);

module.exports = takeUntil;