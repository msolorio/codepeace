/*
Given a  2D Array, A

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:

a b c
  d
e f g
There are 16 hourglasses in Array A, and an hourglass sum is the sum of an hourglass' values.

Task
Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
*/
'use strict';

function checkGridHeightGridLength(grid) {
  const gridHeight = grid.length;
  return grid.reduce((allEqualLength, row) => {
    if (row.length !== gridHeight) return false;
    return allEqualLength;
  }, true);
}

function findHourglassPointVal(grid, x, y) {
  let hourglassPoints = 0;

  for (let i=x, j=x+3; i<j; i++) { hourglassPoints += grid[y][i]; }
  hourglassPoints += grid[y+1][x+1];
  for (let i=x, j=x+3; i<j; i++) { hourglassPoints += grid[y+2][i]; }

  return hourglassPoints;
}

function findLargestHourglassValue(grid) {
  if (!Array.isArray(grid)) return new Error('input should be an array');

  if (!checkGridHeightGridLength(grid)) return new Error('grid should have equal height and equal length for all rows');

  // collect all hourglass points
  const allHourglassPoints = [];
  for (let i=0, j=grid.length-2; i<j; i++) {
    for (let k=0, l=grid.length-2; k<l; k++) {
      allHourglassPoints.push(findHourglassPointVal(grid, i, k));
    }
  }

  // return largest hourglass point value
  return allHourglassPoints.reduce((largestVal, val) => {
    return val > largestVal ? val : largestVal
  }, 0);
}

module.exports = { findLargestHourglassValue, findHourglassPointVal };
