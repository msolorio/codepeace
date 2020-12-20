/*
Task
In one city it is allowed to write words on the buildings walls. The local janitor, however, doesn't approve of it at all. Every night he vandalizes the writings by erasing all occurrences of some letter. Since the janitor is quite lazy, he wants to do this with just one swipe of his mop.

Given a word, find the minimum width of the mop required to erase each of the letters.

Input/Output
[input] string word

A word consisting of only lowercase English letters.

5 ≤ word.length ≤ 50

[output] an integer array

An array of length 26. The first element is the minimum width of the mop to erase letter 'a', the second - letter 'b' etc.

Example
For word = "abacaba", the output should be:

[7, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

(26 elements altogether)

First element 7 means: from first "a" to last "a" need a width of 7.

First element 5 means: from first "b" to last "b" need a width of 5.

First element 1 means: from first "c" to last "c" need a width of 1.
*/

// Returns an array of letters "a" to "z"
function getLettersArray() {
  return new Array(26).fill('').map((_, index) => {
    return String.fromCharCode(index + 97);
  });
}

// Returns an array of mop sizes for each letter in the alphabet
function getMopSizes(word) {
  const letters = getLettersArray();
  const lowercaseWord = word.toLowerCase();

  // For each letter return the mop size (length btw the first and
  // last instance) or return zero if the letter is not found in the word
  return letters.map((letter) => {
    const firstIndex = lowercaseWord.indexOf(letter);
    const lastIndex = lowercaseWord.lastIndexOf(letter);
    
    return Number(firstIndex > -1) && lastIndex - firstIndex + 1;
  });
}

console.log(getMopSizes('abacaba'));
