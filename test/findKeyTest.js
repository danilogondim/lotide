const findKey = require('../findKey');
const { assert } = require('chai');

describe('#findKey', () => {
  it(`returns "drama" for ({
    "comedy": { movie: "Game Night", series: "Brooklyn Nine-Nine" },
    "drama": { movie: "A Star is Born", series: "Dark" }
  }, x => x.series === "Dark")`, () => {
    const actual = findKey({
      "comedy": { movie: "Game Night", series: "Brooklyn Nine-Nine" },
      "drama": { movie: "A Star is Born", series: "Dark" }
    }, x => x.series === "Dark");
    assert.strictEqual(actual, "drama");
  });
  it(`returns undefined for ({
    "comedy": { movie: "Game Night", series: "Brooklyn Nine-Nine" },
    "drama": { movie: "A Star is Born", series: "Dark" }
  }, x => x.series === "Lost")`, () => {
    const actual = findKey({
      "comedy": { movie: "Game Night", series: "Brooklyn Nine-Nine" },
      "drama": { movie: "A Star is Born", series: "Dark" }
    }, x => x.series === "Lost");
    assert.strictEqual(actual, undefined);
  });
});