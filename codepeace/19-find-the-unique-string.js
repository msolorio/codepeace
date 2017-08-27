'use strict';

function checkItemTypes(array) {
  return array.reduce((allItemsAreStrings, item) => {
    if (typeof(item) === 'string') return allItemsAreStrings;
    return false;
  }, true);
}

function formatString(string) {
  return string.toLowerCase().replace(' ', '');
}

// find the first string that contains a character not found in the other strings
function findUniq(array) {
  if (!Array.isArray(array)) return new Error('input must be an array');

  if (!checkItemTypes(array)) return new Error('array inputted must contain only strings');

  if (array.length < 4) return new Error('array inputted must of length 4 or greater');

  // loop through each string
  // returning first instance that has a unique character
  return array.find((string, index) => {
    string = formatString(string);
    let stringHasUniqueChar = false;
    // loop through each character of that string
    string.split('').forEach((char) => {
      // see if that character can be found in other strings in the array
      let charIsUniq = array.reduce((uniq, string2, index2) => {
        if (index2 === index) return uniq;

        if (formatString(string2).indexOf(char) < 0) {
          return uniq;
        } else {
          return false;
        }
      }, true);

      if (charIsUniq) stringHasUniqueChar = true;
    });

    return stringHasUniqueChar;
  });
}

module.exports = findUniq;
