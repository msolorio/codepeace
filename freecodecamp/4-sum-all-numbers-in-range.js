/*
given an array of 2 numbers
ruturn the sum of those numbers and all numbers inbetween
*/

function sumAll(arr) {
  if (Array.isArray(arr) !== true) {
    return new Error('input must be an array');
  }

  const containsOnlyNumbers = arr.reduce((onlyNums, item) => {
    if (typeof(item) !== 'number') return false;
    return onlyNums;
  }, true);

  if (!containsOnlyNumbers) {
    return new Error('input array must contain only numbers');
  }

  let sum = 0;
  for (let i=Math.min(...arr), j=Math.max(...arr); i<=j; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll;
