'use strict';

function findLongestWordInString(string) {
  if (typeof(string) !== 'string') return new Error('expecting input to be a string');
  const words = string.split(' ');
  return words.reduce((lengthOfLongest, word) => {
    if (word.length > lengthOfLongest) return word.length;
    return lengthOfLongest;
  }, 0);
}

module.exports = findLongestWordInString;
