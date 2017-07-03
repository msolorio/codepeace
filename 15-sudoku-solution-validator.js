// checks if given array contains all digits 1 - 9
function containsAllDigits(array) {
  const requiredDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return requiredDigits.reduce((hasAllDigits, digit) => {
    if (array.indexOf(digit) < 0) return false;
    return hasAllDigits;
  }, true);
}

function allRowsValid(board) {
  return board.reduce((rowsValid, row) => {
    if (containsAllDigits(row)) return rowsValid;
    return false;
  }, true);
}

function allColumnsValid(board) {

  // build columns arrays
  let columns = [];
  for (let i=0; i<board[0].length; i++) {
    let column = [];
    board.forEach((row) => {
      column.push(row[i]);
    });
    columns.push(column);
  }
  
  // checks if all cols valid
  return columns.reduce((columnsValid, col) => {
    if (containsAllDigits(col)) return columnsValid;
    return false;
  }, true);
}

function allSubGridsValid(board) {
  const subGrids = [];
  // for each 3 row group
  for (let i=0; i<board.length; i+=3) {
    for (let j=0; j<board[0].length; j+=3) {
      const subGrid = [];

      subGrid.push(...board[i].slice(j, j+3));
      subGrid.push(...board[i+1].slice(j, j+3));
      subGrid.push(...board[i+2].slice(j, j+3));

      subGrids.push(subGrid);
    }
  }
  
  return subGrids.reduce((allValid, subGrid) => {
    if (containsAllDigits(subGrid)) return allValid;
    return false;
  }, true);
}

function validSolution(board) {

  return allRowsValid(board) && allColumnsValid(board) && allSubGridsValid(board);
}

const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// subGridsValid(board);

module.exports = { validSolution };
