const countOnly = require('../countOnly');
const { assert } = require('chai');
describe('#countOnly', () => {
  it(`returns { "Jason": 1, "Fang": 2 } for (["Karl", "Salima", "Fang", "Jason", "Salima", "Fang"], { "Jason": true, "Karima": true, "Fang": true })`, () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Fang",
      "Jason",
      "Salima",
      "Fang"
    ];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), { "Jason": 1, "Fang": 2 });
  });
});