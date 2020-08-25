const takeUntil = require('../takeUntil');
const { assert } = require('chai');

describe('#takeUntil', () => {
  it('returns [1, 5, 7] for ([1, 5, 7, -1, 2, 4, 5], x => x < 0)', () => {
    const actual = takeUntil([1, 5, 7, -1, 2, 4, 5], x => x < 0);
    assert.deepEqual(actual, [1, 5, 7]);
  });
  it('returns ["chocolate", "chocolate"] for (["chocolate", "chocolate", "raisin"], x => x === "raisin")', () => {
    const actual = takeUntil(["chocolate", "chocolate", "raisin"], x => x === "raisin");
    assert.deepEqual(actual, ["chocolate", "chocolate"]);
  });
  it('returns [] for (["raisin"], x => x === "raisin")', () => {
    const actual = takeUntil(["raisin"], x => x === "raisin");
    assert.deepEqual(actual, []);
  });
});