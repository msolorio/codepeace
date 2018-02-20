'use strict';

// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.

const findIndexOfFirstVowel = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const letters = word.split('');

  return letters.findIndex((letter) => {
    return vowels.indexOf(letter) !== -1;
  });
}

const convertWordToPigLatin = (word) => {
  const firstVowelIndex = findIndexOfFirstVowel(word);

  switch(firstVowelIndex) {
    case -1:
      return `${word}ay`;

    case 0:
      return `${word}way`;

    // slices off consonant cluster and add to end
    default:
      return `${word.slice(firstVowelIndex)}${word.slice(0, firstVowelIndex)}ay`;
  }
};

function translateToPigLatin(phrase) {
  if (phrase === '') {
    return new Error('an input was not provided to translateToPigLatin');
  }

  if (typeof phrase !== 'string') {
    return new TypeError('input to translateToPigLatin was not a string');
  }

  const words = phrase.split(' ');
  const convertedWords = words.map(convertWordToPigLatin);

  return convertedWords.join(' ');
}

module.exports = {
  findIndexOfFirstVowel,
  convertWordToPigLatin,
  translateToPigLatin
};
