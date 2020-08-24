// a function that takes in an array and return the middle-most element(s) of the given array.
const middle = array => {
  const output = [];
  if (array.length >= 3 && array.length % 2 !== 0) {
    output.push(array[(array.length - 1) / 2]);
  } else if (array.length >= 3) {
    output.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return output;
};

module.exports = middle;