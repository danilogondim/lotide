const countLetters = require('../countLetters');
const { assert } = require('chai');

describe('#countLetters', () => {
  it('returns { L: 2, H: 1 } for "LHL"', () => {
    const actual = countLetters("LHL");
    assert.deepEqual(actual, { L: 2, H: 1 });
  });
  it('returns { l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1 } for "lighthouse"', () => {
    const actual = countLetters("lighthouse");
    assert.deepEqual(actual, { l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1 });
  });
});