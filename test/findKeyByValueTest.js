// const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');
const { assert } = require('chai');

describe('#findKeyByValue', () => {
  it(`returns "drama" for ({ "sci_fi": "The Expanse", "comedy": "Brooklyn Nine-Nine", "drama": "The Wire" }, "The Wire")`, () => {
    const bestTVShowsByGenre = {
      "sci_fi": "The Expanse",
      "comedy": "Brooklyn Nine-Nine",
      "drama": "The Wire"
    };
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.deepEqual(actual, "drama");
  });
  it(`returns undefined for ({ "sci_fi": "The Expanse", "comedy": "Brooklyn Nine-Nine", "drama": "The Wire" }, "That '70s Show")`, () => {
    const bestTVShowsByGenre = {
      "sci_fi": "The Expanse",
      "comedy": "Brooklyn Nine-Nine",
      "drama": "The Wire"
    };
    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.deepEqual(actual, undefined);
  });
});