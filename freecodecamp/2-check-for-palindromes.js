'use strict';

function checkForPalindrome(string) {
  if (!string) return false;

  string = string.toLowerCase().replace(/[^a-z0-9]+/gi, "");

  const stringReversed = string.split('').reverse().join('');
  return stringReversed === string;
}

module.exports = { checkForPalindrome };
