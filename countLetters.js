// a function that takes in a sentence (as a string) and then return a count of each of the letters in that sentence
const countLetters = sentence => {
  const output = {};
  for (let char of sentence.split(" ").join("")) {
    output[char] ? output[char]++ : output[char] = 1;
  }
  return output;
};

module.exports = countLetters;