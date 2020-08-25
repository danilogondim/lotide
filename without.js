// FUNCTION IMPLEMENTATION
// a function that takes in a source array and a itemsToRemove array, and returns a new array with only those elements from source that are not present in the itemsToRemove array
const without = (source, itemsToRemove) => {
  const output = [];
  for (let element of source) {
    let toInclude = true;
    for (let item of itemsToRemove) {
      if (element === item || (typeof element !== "string" && element !== undefined && isNaN(element) && isNaN(item))) {
        toInclude = false;
      }
    }
    if (toInclude) {
      output.push(element);
    }
  }
  return output;
};

module.exports = without;