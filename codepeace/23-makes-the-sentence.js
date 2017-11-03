'use strict';

function checkIfAllAreStrings(array) {
  return array.reduce((allAreStrings, item) => {
    if (typeof item !== 'string') return false;
    return allAreStrings;
  }, true);
}

function createCharactersObj(characters) {
  return characters.reduce((obj, character) => {
    // zero is a falsy value so we must check for undefined
    if (obj[character] === undefined) obj[character] = 1;
    else obj[character]++;

    return obj;
  }, {});
}

function makesTheSentence(characters, string) {
  if (Array.isArray(characters) === false) {
    return new Error('the first argument must be an array');
  }

  if (!checkIfAllAreStrings(characters)) {
    return new Error('all items in array must be strings');
  }

  if (typeof string !== 'string') {
    return new Error('second argument must be a string');
  }

  const sourceCharactersObj = createCharactersObj(characters);
  // given string, remove whitespace, convert to array,
  // and then convert to object characters map
  const stringCharactersObj = createCharactersObj(string.replace(/ /g, '').split(''));

  // for each character type in string, if character is not included in source array
  // or if more exist in string than in source array return false
  let allCharactersIncluded = true;
  for (let character in stringCharactersObj) {
    if (sourceCharactersObj[character] === undefined
        || stringCharactersObj[character] > sourceCharactersObj[character]) {
      allCharactersIncluded = false;
    }
  }
  return allCharactersIncluded;
}

module.exports = makesTheSentence;
