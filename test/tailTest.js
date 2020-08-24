const { assert } = require('chai');
const tail = require('../tail');
describe('#tail', () => {
  it('returns [6, 7] for [5, 6, 7]', () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it('returns ["6", "7"] for ["5", "6", "7"]', () => {
    assert.deepEqual(tail(["5", "6", "7"]), ["6", "7"]);
  });
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);

  });
});