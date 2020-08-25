// Implement the function findKey which takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;