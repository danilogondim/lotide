const { assert } = require('chai');
const flatten = require('../flatten')

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('returns [3, 4] for [[3, 4]]', () => {
    assert.deepEqual(flatten([[3, 4]]), [3, 4]);
  });
  it('returns [3, 4] for [3, 4]', () => {
    assert.deepEqual(flatten([3, 4]), [3, 4]);
  });
  it('returns [3, 4, "a"] for [[3, 4], "a"]', () => {
    assert.deepEqual(flatten([[3, 4], "a"]), [3, 4, "a"]);
  });
});