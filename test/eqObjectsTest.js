const eqObjects = require('../eqObjects');
const { assert } = require('chai');

describe('#eqObjects', () => {
  it('returns true for ({ a: "1", b: "2" }, { b: "2", a: "1" })', () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: "1" };
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it('returns false for ({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" })', () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(obj1, obj2));
  });
  it('returns true for ({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" })', () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it('returns false for ({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] })', () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(obj1, obj2));
  });
});