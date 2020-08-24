const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
// a function that takes in a source array and a itemsToRemove array, and returns a new array with only those elements from source that are not present in the itemsToRemove array
const without = (source, itemsToRemove) => {
  const output = [];
  for (let element of source) {
    let toInclude = true;
    for (let item of itemsToRemove) {
      if (element === item || (typeof element !== "string" && element !== undefined && isNaN(element) && isNaN(item))) {
        toInclude = false;
      }
    }
    if (toInclude) {
      output.push(element);
    }
  }
  return output;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3", undefined], [undefined])); // => ["1", "2", "3"]
console.log(without(["1 2 3"], ["1, 2, 3"])); // => ["1 2 3"]
console.log(without(["1", "2", "3", undefined, NaN], [NaN])); // => ["1", "2", "3", undefined]

// using assertArraysEqual
assertArraysEqual([1, 2, 3], without([1, 2, 3], [])); // => should PASS
assertArraysEqual([2, 3], without([1, 2, 3], [1])); // => should PASS
assertArraysEqual(["1", "2"], without(["1", "2", "3"], [1, 2, "3"])); // => should PASS
assertArraysEqual(["1", "2", "3"], without(["1", "2", "3", undefined], [undefined])); // => should PASS
assertArraysEqual(["1 2 3"], without(["1 2 3"], ["1, 2, 3"])); // => should PASS
assertArraysEqual(without(["1", "2", "3", undefined, NaN], [NaN]), ["1", "2", "3", undefined]); // => should PASS


// // check if the without function is returning a new array and not modifying the original array that is passed in
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS

module.exports = without;