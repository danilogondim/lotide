// requiring eqArrays function
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
/*
* the commented lines are alternatives if we don't want to use concatenation. We have two options:
* 1. use the util library's inspect function (first we import (const inspect = require('util').inspect)
* then use inspect(actual))
* 2. use literal template. When using literal template, we got some odd results when comparing
* [undefined] and [''] arrays, the output was showing the right message (failed), but it was
* also showing [] !== []. To overcome this problem, JSON.stringify and ternary operators were used.
*/
const assertArraysEqual = (actual, expected) => {
  // const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    // console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    // console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    console.log("✅✅✅ Assertion Passed:", actual, "===", expected);
  } else {
    // console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    // console.log(`❌❌❌ Assertion Failed: ${actual[0] === undefined ? `[${JSON.stringify(undefined)}]` : JSON.stringify(actual)} !== ${expected[0] === undefined ? JSON.stringify(undefined) : JSON.stringify(expected)}`);
    console.log("❌❌❌ Assertion Failed:", actual, "!==", expected);
  }
};

module.exports = assertArraysEqual;