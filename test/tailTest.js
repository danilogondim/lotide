const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// TEST CODE
assertArraysEqual(tail([5, 6, 7]), [6, 7]);
assertArraysEqual(tail([5, 6, 7]), [7, 6]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([1]), []);
assertArraysEqual(tail([]), []);