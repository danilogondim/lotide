const eqObjects = require('./eqObjects');

// the assertObjectsEqual takes in two objects and console.log if they are equal or not.
// literal template version is commented. To change to the literal template version, just comment both console.logs and uncomment the commented lines
const assertObjectsEqual = (actual, expected) => {
  // const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅ Assertion Passed:", actual, "===", expected);
    // console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log("❌❌❌ Assertion Failed:", actual, "!==", expected);
    // console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  }
};

module.exports = assertObjectsEqual;