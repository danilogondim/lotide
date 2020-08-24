// a function which takes in an array containing nested arrays, and returns a "flattened" version of the array
const flatten = array => {
  const output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        output.push(item);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;