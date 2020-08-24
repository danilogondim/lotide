const assertArraysEqual = require('../assertArraysEqual');

// Use assertArraysEqual to write test cases for various scenarios.
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual(["1, 2, 3"], ["1, 2, 3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual([], []); // => should PASS
assertArraysEqual([""], [""]); // => should PASS
assertArraysEqual([undefined], [""]); // => should FAIL