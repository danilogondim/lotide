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

// A COPY OF EQOBJECTS FUNCTION
const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (!(object1[key] === object2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// FUNCTION IMPLEMENTATION
// the assertObjectsEqual takes in two objects and console.log if they are equal or not.
// literal template version is commented. To change to the literal template version, just comment both console.logs and uncomment the commented lines
const assertObjectsEqual = (actual, expected) => {
  // const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log("\u2705\u2705\u2705 Assertion Passed:", actual, "===", expected);
    // console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log("\u274C\u274C\u274C Assertion Failed:", actual, "!==", expected);
    // console.log(`\u274C\u274C\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  }
};

// TEST CODE
// Use assertObjectsEqual to write test cases for various scenarios.
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // => should PASS
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // => should FAIL
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // => should PASS
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // => should FAIL
assertObjectsEqual({ a: "1" }, { a: "1" }); // => should PASS

module.exports = assertObjectsEqual;