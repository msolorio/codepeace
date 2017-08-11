/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(array) {
  const acc = array.reduce((acc, num) => {
    num === 0 ? acc.zeros.push(num) : acc.nonZeros.push(num);
    return acc;
  }, {
    nonZeros: [],
    zeros: []
  });

  return [...acc.nonZeros, ...acc.zeros];
}

module.exports = { moveZeros };
