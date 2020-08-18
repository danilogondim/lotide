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

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    // console.log(`\u2705\u2705\u2705 Assertion Passed: [${actual}] === [${expected}]`);
    console.log("\u2705\u2705\u2705 Assertion Passed:", actual, "===", expected);
  } else {
    // console.log(`\u274C\u274C\u274C Assertion Failed: [${actual}] !== [${expected}]`);
    console.log("\u274C\u274C\u274C Assertion Failed:", actual, "!==", expected);
  }
};

// Use assertArraysEqual to write test cases for various scenarios.
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual(["1, 2, 3"], ["1, 2, 3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual([], []); // => should PASS
assertArraysEqual([""], [""]); // => should PASS
assertArraysEqual([undefined], [""]); // => should FAIL