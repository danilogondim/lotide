const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');
const { assert } = require('chai');

describe('#without', () => {
  it('returns [2, 3] for ([1, 2, 3], [1])', () => {
    const actual = without([1, 2, 3], [1]);
    assert.deepEqual(actual, [2, 3]);
  });
  it('returns ["1", "2"] for (["1", "2", "3"], [1, 2, "3"])', () => {
    const actual = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(actual, ["1", "2"]);
  });
  it('returns ["1", "2", "3"] for (["1", "2", "3", undefined], [undefined])', () => {
    const actual = without(["1", "2", "3", undefined], [undefined]);
    assert.deepEqual(actual, ["1", "2", "3"]);
  });
  it('returns ["1 2 3"] for (["1 2 3"], ["1, 2, 3"])', () => {
    const actual = without(["1 2 3"], ["1, 2, 3"]);
    assert.deepEqual(actual, ["1 2 3"]);
  });
  it('returns ["1", "2", "3", undefined]) for (["1", "2", "3", undefined, NaN], [NaN])', () => {
    const actual = without(["1", "2", "3", undefined, NaN], [NaN]);
    assert.deepEqual(actual, ["1", "2", "3", undefined]);
  });
  it('returns [1, 2, 3] for ([1, 2, 3], [])', () => {
    const actual = without([1, 2, 3], []);
    assert.deepEqual(actual, [1, 2, 3]);
  });
  it('returns a new array instead of modifying the original array', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});