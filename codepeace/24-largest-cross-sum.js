'use strict';

// returns true if array contains only numbers
function containsOnlyNums(arr) {
  return arr.reduce((onlyNums, item) => {
    if (typeof item !== 'number') return false;
    return onlyNums;
  }, true);
}

// returns largest number in array
function findLargestNum(arr) {
  return arr.reduce((largest, item) => {
    if (item > largest) return item;
    return largest;
  }, 0);
}

// given 3x3 grid find largest summed column
function findLargestCol(arr) {
  const colSums = arr.reduce((colSums, item, index) => {
    const colNum = index % 3;
    colSums[colNum] += item;
    return colSums;
  }, [0, 0, 0]);

  return findLargestNum(colSums);
}

// given 3x3 grid find largest summed row
function findLargestRow(arr) {
  const rowSums = arr.reduce((rowSums, item, index) => {
    const rowNum = Math.floor(index / 3);
    rowSums[rowNum] += item;
    return rowSums;
  }, [0, 0, 0]);

  return findLargestNum(rowSums);
}

// given 3x3 grid find largest column plus largest row
function largestCrossSum(arr) {
  if (!Array.isArray(arr)) {
    return new Error('input must be an array');
  }

  if (arr.length !== 9) {
    return new Error('input array must have exactly 9 items');
  }

  if (!containsOnlyNums(arr)) {
    return new Error('input array must contain only numbers');
  }

  return findLargestCol(arr) + findLargestRow(arr);
}

module.exports = largestCrossSum;
