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

// a function which takes in an array containing nested arrays, and returns a "flattened" version of the array
const flatten = array => {
  const output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        output.push(item);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => should PASS
assertArraysEqual(flatten([[3, 4]]), [3, 4]); // => should PASS
assertArraysEqual(flatten([3, 4]), [3, 4]); // => should PASS
assertArraysEqual(flatten([[3, 4], "a"]), [3, 4]); // => should FAIL
assertArraysEqual(flatten([[3, 4], "a"]), [3, 4, "a"]); // => should PASS