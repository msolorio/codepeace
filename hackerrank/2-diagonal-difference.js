function checkGridLengthAndHeight(grid) {
  const gridHeight = grid.length;
  return grid.reduce((allEqualLength, row) => {
    if (row.length !== gridHeight) return false;
    return allEqualLength;
  }, true);
}

function checkIfAllValuesAreNumbers(grid) {
  return grid.reduce((allNums, row) => {
    if (row.reduce((allItemsNums, item) => {
      if (typeof(item) === 'number') return allItemsNums;
      else return false;
    }, true)) {
      return allNums;
    } else return false;
  }, true);
}

function diagonalDifference(grid) {
  if (!checkGridLengthAndHeight(grid)) {
    return new Error('grid row lengths must all match grid height');
  }

  if (!checkIfAllValuesAreNumbers(grid)) {
    return new Error('all grid values must be numbers');
  }

  const diagonal1Sum = grid.reduce((sum, row, index) => {
    return sum + row[index];
  }, 0);

  const diagonal2Sum = grid.reduce((sum, row, index) => {
    return sum + row[row.length - 1 - index];
  }, 0);

  return Math.abs(diagonal1Sum - diagonal2Sum);
}

module.exports = diagonalDifference;
