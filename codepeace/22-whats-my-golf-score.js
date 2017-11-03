'use strict';

/*
* checkIfAllAreNums - checks if all array items are numbers
* @param {array} arr - an array of values
* @return {boolean} - indication of whether or not all values are numbers
*/
function checkIfAllAreNums(arr) {
  return arr.reduce((allAreNums, item) => {
    if (isNaN(item)) return false;
    return allAreNums;
  }, true);
};

/*
* convertStringToNumbers - given a string of numeric characters return an array of numbers
* @param {string} string - a string of numbers
* @return {array} - returns an array of numbers
*/
function convertStringToNumbers(string) {
  const arrOfNums = string.split('').map(char => {
    return parseInt(char);
  });

  return arrOfNums;
};

/*
* calcSum - given an array of numbers calculate the total
* @param {array} arr - an array of numbers
* @return {number} - the sum of the numbers in the array
*/
function calcSum(arr) {
  return arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

function golfScoreCalculator(parList, scoreList) {
  if (typeof parList !== 'string' || typeof scoreList !== 'string') {
    return new Error('both inputs must be strings');
  }

  if (parList.length !== scoreList.length) {
    return new Error('both inputs must be the same length');
  }

  const parNums = convertStringToNumbers(parList);
  const scoreNums = convertStringToNumbers(scoreList);

  if (!checkIfAllAreNums(parNums)
      || !checkIfAllAreNums(scoreNums)) {
    return new Error('all characters in inputs must be numeric');
  }

  const parTotal = calcSum(parNums);
  const scoreTotal = calcSum(scoreNums);

  return scoreTotal - parTotal;
}

module.exports = golfScoreCalculator;
