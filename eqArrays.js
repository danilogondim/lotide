// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      const elem1 = firstArray[i];
      const elem2 = secondArray[i];
      if (Array.isArray(elem1) && Array.isArray(elem2)) {
        if (!eqArrays(elem1, elem2)) return false;
      } else if (typeof elem1 === 'object' && typeof elem2 === 'object') {
        if (JSON.stringify(elem1) !== JSON.stringify(elem2)) return false;
      } else if (elem1 !== elem2) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;