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

// a function that takes in an array and return the middle-most element(s) of the given array.
const middle = array => {
  const output = [];
  if (array.length >= 3 && array.length % 2 !== 0) {
    output.push(array[(array.length - 1) / 2]);
  } else if (array.length >= 3) {
    output.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return output;
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);