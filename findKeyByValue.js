const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
// function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// TEST CODE
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama": "The Wire"
};

const tenants = {
  "901": "Thiago",
  "101": "Danilo",
  "303": "Ricardo"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(tenants, "Sara"), undefined);
assertEqual(findKeyByValue(tenants, "Danilo"), "101");

module.exports = findKeyByValue;