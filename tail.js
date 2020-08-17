const assertEqual = function(actual, expected) {
  if (actual.join() === expected.join()) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const tail = array => array.slice(1);

// TEST CODE
assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail([5, 6, 7]), [7, 6]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!