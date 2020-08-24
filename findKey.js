// FUNCTION IMPLEMENTATION

// Implement the function findKey which takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// TEST CODE
// A COPY OF ASSERTEQUAL FUNCTION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

// test
const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
assertEqual(findKey(obj1, x => x.stars === 2), "noma");

const moviesAndSeries = {
  "sci_fi": { movie: "E.T the Extra-Terrestrial", series: "The 100" },
  "comedy": { movie: "Game Night", series: "Brooklyn Nine-Nine" },
  "drama": { movie: "A Star is Born", series: "Dark" }
};
assertEqual(findKey(moviesAndSeries, x => x.series === "Dark"), "drama");

const tenants = {
  "901": { name: "Thiago", rent: 2500 },
  "101": { name: "Danilo", rent: 1500 },
  "303": { name: "Ricardo", rent: 1800 }
};
assertEqual(findKey(tenants, x => x.name === "Danilo"), "101");
assertEqual(findKey(tenants, x => x.name === "Sara"), undefined);

module.exports = findKey;