// A COPY OF EQARRAYS FUNCTION
const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  }
  return true;
};

// A COPY OF ASSERTARRAYEQUAL FUNCTION
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    // console.log(`\u2705\u2705\u2705 Assertion Passed: [${actual}] === [${expected}]`);
    console.log("\u2705\u2705\u2705 Assertion Passed:", actual, "===", expected);
  } else {
    // console.log(`\u274C\u274C\u274C Assertion Failed: [${actual}] !== [${expected}]`);
    console.log("\u274C\u274C\u274C Assertion Failed:", actual, "!==", expected);
  }
};

// FUNCTION IMPLEMENTATION
// a function that takes in a source array and a itemsToRemove array, and returns a new array with only those elements from source that are not present in the itemsToRemove array
const without = (source, itemsToRemove) => {
  const output = [];
  for (let element of source) {
    let toInclude = true;
    for (let item of itemsToRemove) {
      if (element === item) {
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

// using assertArraysEqual
assertArraysEqual([1, 2, 3], without([1, 2, 3], [1])); // => should FAIL
assertArraysEqual(["1", "2", "3"], without(["1", "2", "3"], [1, 2, "3"])); // => should FAIL
assertArraysEqual(["1", "2", "3", undefined], without(["1", "2", "3", undefined], [undefined])); // => should FAIL
assertArraysEqual(["1 2 3"], without(["1 2 3"], ["1, 2, 3"])); // => should PASS


// check if the without function is returning a new array and not modifying the original array that is passed in
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS