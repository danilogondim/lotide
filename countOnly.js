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

module.exports = countOnly;