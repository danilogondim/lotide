// A COPY OF ASSERTEQUAL FUNCTION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
// a function that takes in a sentence (as a string) and then return a count of each of the letters in that sentence
const countLetters = sentence => {
  const output = {};
  for (let char of sentence.split(" ").join("")) {
    output[char] ? output[char]++ : output[char] = 1;
  }
  return output;
};

// TEST CODE
console.log(countLetters("LHL")); // => { L: 2, H: 1 }
console.log(countLetters("lighthouse in the house")); // => { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

assertEqual(countLetters("LHL")["L"], 2);
assertEqual(countLetters("LHL")["H"], 1);
assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["i"], 2);
assertEqual(countLetters("lighthouse in the house")["g"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["t"], 2);
assertEqual(countLetters("lighthouse in the house")["o"], 2);
assertEqual(countLetters("lighthouse in the house")["u"], 2);
assertEqual(countLetters("lighthouse in the house")["s"], 2);
assertEqual(countLetters("lighthouse in the house")["e"], 3);
assertEqual(countLetters("lighthouse in the house")["n"], 1);