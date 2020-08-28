const eqArrays = require('../eqArrays');
const { assert } = require('chai');

describe('#eqArrays', () => {
  it('returns true for ([1, 2, 3], [1, 2, 3])', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it('returns true for ([], [])', () => {
    const arr1 = [];
    const arr2 = [];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it('returns true for ([""], [""])', () => {
    const arr1 = [""];
    const arr2 = [""];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it('returns false for (["1", "2", "3"], ["3", "2", "1"])', () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["3", "2", "1"];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it('returns false for ([1, 2, 3, 4], [1, 2, 3])', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it('returns false for ([undefined], [""])', () => {
    const arr1 = [undefined];
    const arr2 = [""];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it('returns true for ([[2, 3], [4]], [[2, 3], [4]])', () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4]];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it('returns false for ([[2, 3], [4]], [[2, 3], [4, 5]])', () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4, 5]];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it('returns false for ([[2, 3], [4]], [[2, 3], 4])', () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], 4];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it('returns true for ([[2, 3], [{ x: 4 }]], [[2, 3], [{ x: 4 }]])', () => {
    const arr1 = [[2, 3], [{ x: 4 }]];
    const arr2 = [[2, 3], [{ x: 4 }]];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it('returns false for ([[2, 3], [{ x: 4 }]], [[2, 3], [{ x: 3 }]])', () => {
    const arr1 = [[2, 3], [{ x: 4 }]];
    const arr2 = [[2, 3], [{ x: 3 }]];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it('returns false for ([[2, 3], [{ x: [4, 3] }]], [[2, 3], [{ x: [3, 4] }]])', () => {
    const arr1 = [[2, 3], [{ x: [4, 3] }]];
    const arr2 = [[2, 3], [{ x: [3, 4] }]];
    assert.isFalse(eqArrays(arr1, arr2));
  });
});