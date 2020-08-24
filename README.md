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

* `assertArraysEqual()`: a function that asserts whether two arrays are equal.
* `assertEqual()`: a function that asserts whether two primitive values are equal.
* `assertObjectsEqual()`: a function that asserts whether two objects are equal.
* `countLetters()`: a function that takes in a sentence (as a string) and then return a count of each of the letters in that sentence. The return value is an object. Ex: `countLetters("LHL")); // => { L: 2, H: 1 }`.
* `countOnly()`:
* `eqArrays()`:
* `eqObjects()`:
* `findKey()`:
* `findKeyByValue()`:
* `flatten()`:
* `head()`:
* `letterPositions()`:
* `map()`:
* `middle()`:
* `tail()`:
* `takeUntil()`:
* `without()`: