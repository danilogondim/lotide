const map = require('../map');
const { assert } = require('chai');

describe('#map', () => {
  it('returns ["g", "c"] for (["ground", "control"], word => word[0])', () => {
    const actual = map(["ground", "control"], word => word[0]);
    assert.deepEqual(actual, ["g", "c"]);
  });
  it('returns ["ground ground", "control control"] for (["ground", "control"], word => word + " " + word)', () => {
    const actual = map(["ground", "control"], word => word + " " + word);
    assert.deepEqual(actual, ["ground ground", "control control"]);
  });
  it('returns [6, 7] for (["ground", "control"], word => word.length)', () => {
    const actual = map(["ground", "control"], word => word.length);
    assert.deepEqual(actual, [6, 7]);
  });
});