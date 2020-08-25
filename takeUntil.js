// a function that returns a slice of a given array with elements taken from the beginning until the callback function returns a truthy value.

const takeUntil = (array, callback) => {
  const output = [];
  for (const item of array) {
    if (!callback(item)) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
};

module.exports = takeUntil;