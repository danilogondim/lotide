# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @danilogondim/lotide`

**Require it:**

`const _ = require('@danilogondim/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: asserts whether two arrays are equal. Ex:
```javascript
assertArraysEqual([1, 2, 3], [1, 2, 3]);
// => ✅✅✅ Assertion Passed: [ 1, 2, 3 ] === [ 1, 2, 3 ]
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
// => ❌❌❌ Assertion Failed: [ 1, 2, 3, 4 ] !== [ 1, 2, 3 ]
```
* `assertEqual()`: asserts whether two primitive values are equal. Ex:
```javascript
assertEqual("dog", "dog");
// => ✅✅✅ Assertion Passed: dog === dog
assertEqual("cat", "Cat");
// => ❌❌❌ Assertion Failed: cat !== Cat
```
* `assertObjectsEqual()`: asserts whether two objects are equal. Ex:
```javascript
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
// => ✅✅✅ Assertion Passed: { a: '1', b: '2' } === { b: '2', a: '1' }
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
// => ❌❌❌ Assertion Failed: { a: '1', b: '2' } !== { a: '1', b: '2', c: '3' }
```
* `countLetters()`: takes in a sentence (as a string) and returns a count of each of the letters in that sentence. The return value is an object. Ex: 
```javascript
countLetters("LHL")); // => { L: 2, H: 1 }
```
* `countOnly()`: takes in a collection of items and returns counts for a specific subset of those items. Ex: 
```javascript
const firstNames = [
      "Karl",
      "Salima",
      "Fang",
      "Jason",
      "Salima",
      "Fang"
    ];
countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
// => { "Jason": 1, "Fang": 2 }
```
* `eqArrays()`: takes in two arrays and returns true or false, based on a perfect match. Ex:
```javascript
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
// => false
```
* `eqObjects()`: returns true if both objects have identical keys with identical values. Otherwise, returns false. Ex:
```javascript
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, ba); // => true
eqObjects(ab, abc); // => false
```
* `findKey()`: takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.Ex:
```javascript
const moviesAndSeries = {
  "sci_fi": { movie: "E.T the Extra-Terrestrial", series: "The 100" },
  "comedy": { movie: "Game Night", series: "Brooklyn Nine-Nine" },
  "drama": { movie: "A Star is Born", series: "Dark" }
};
findKey(moviesAndSeries, x => x.series === "Dark");
// => "drama"
};
findKey(moviesAndSeries, x => x.series === "Lost");
// => undefined
```
* `findKeyByValue()`: takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with the given value is found, then it returns undefined. Ex:
```javascript
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama": "The Wire"
};
findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
// => "comedy"
findKeyByValue(bestTVShowsByGenre, "That '70s Show");
// => undefined
```
* `flatten()`: takes in an array containing nested arrays, and returns a "flattened" version of the array. Ex:
```javascript
flatten([1, 2, [3, 4], 5, [6]]);
// => [1, 2, 3, 4, 5, 6]);
```
* `head()`: returns the first element of a given array. Ex:
```javascript
head(['Hello', 'Lighthouse', 'Labs']);
// => 'Hello'
```
* `letterPositions()`: returns all the indices (zero-based positions) in the string where each character is found Ex:
```javascript
letterPositions("hello");
// => { h: [0], e: [1], l: [2, 3], o: [4] }
```
* `map()`: takes in an array to map and a callback function, and returns a new array based on the results of the callback function. Ex:
```javascript
const words = ["ground", "control", "to", "major", "tom"];
map(words, word => word[0]);
// => ['g', 'c', 't', 'm', 't']
map(words, word => word.length);
// => [6, 7, 2, 5, 3]
```
* `middle()`: takes in an array and return the middle-most element(s) of the given array. Ex:
```javascript
middle([1, 2, 3, 4, 5]);
// => [3]
middle([1, 2, 3, 4]);
// => [2, 3]
```
* `tail()`: returns all but the first element of a given array. Ex:
```javascript
tail(["Hello", "Lighthouse", "Labs"]);
// => ["Lighthouse", "Labs"]
```
* `takeUntil()`: returns a slice of a given array with elements taken from the beginning until the callback function returns a truthy value. Ex:
```javascript
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
takeUntil(data1, x => x < 0);
// => [1, 2, 5, 7, 2]
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
takeUntil(data2, x => x === ',');
// => ['I\'ve', 'been', 'to', 'Hollywood']
```
* `without()`: takes in a source array and a itemsToRemove array, and returns a new array with only those elements from source that are not present in the itemsToRemove array. Ex:
```javascript
without(["1", "2", "3", undefined], [undefined]);
// => ["1", "2", "3"]
without(["1 2 3"], ["1, 2, 3"]);
// => ["1 2 3"]
without(["1", "2", "3", undefined, NaN], [NaN]);
// => ["1", "2", "3", undefined]
```