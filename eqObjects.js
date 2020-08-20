// A COPY OF ASSERTEQUAL FUNCTION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};


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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);