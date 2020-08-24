// A COPY OF ASSERTEQUAL FUNCTION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
// a function that takes in a collection of items and return counts for a specific subset of those items
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] ? results[item]++ : results[item] = 1;
    }
  }
  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly;