// const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');
const { assert } = require('chai');

describe('#letterPositions', () => {
  it('returns { h: [0], e: [1], l: [2, 3], o: [4] } for "hello"', () => {
    const actual = letterPositions("hello");
    const expected = { h: [0], e: [1], l: [2, 3], o: [4] };
    assert.deepEqual(actual, expected);
  });
  it('returns { l: [0], i: [1], g: [2], h: [3, 5], t: [4], o: [6], u: [7], s: [8], e: [9] } for "lighthouse"', () => {
    const actual = letterPositions("lighthouse");
    const expected = { l: [0], i: [1], g: [2], h: [3, 5], t: [4], o: [6], u: [7], s: [8], e: [9] };
    assert.deepEqual(actual, expected);
  });
});