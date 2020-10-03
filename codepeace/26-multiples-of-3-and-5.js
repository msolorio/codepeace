// Your goal is to find and return an array representing the number of unique
// multiples of three, five and both three and five (in that order) below n.
// To clarify, for example, 6 is a multiple of three; 20 is a multiple of five.
// 30, however, is a multiple of both three and five, so it gets counted as its
// own separate category, and the totals for three, and five, separately,
// do not increase.

'use strict';

function incrementCategory(totalsArray, integer) {
  const newTotalsArray = totalsArray.slice();

  switch(true) {
    case integer % 3 === 0 && integer % 5 === 0:
      newTotalsArray[2]++;
      return newTotalsArray;

    case integer % 3 === 0:
      newTotalsArray[0]++;
      return newTotalsArray;

    case integer % 5 === 0:
      newTotalsArray[1]++;
      return newTotalsArray;

    default:
      return newTotalsArray;
  }
}

function threesAndFives(number) {
  if (typeof number !== 'number') {
    return new TypeError(
      'input provided to threesAndFives was not a number',
      '26-multiples-of-3-and-5.js'
    );
  }

  if (number < 0) {
    return new Error(
      'input provided to threesAndFives was a negative number',
      '26-multiples-of-3-and-5.js'
    );
  }

  let totalsArray = [0, 0, 0];

  for (let i=1; i<number; i++) {
    totalsArray = incrementCategory(totalsArray, i);
  }

  return totalsArray;
}

module.exports = threesAndFives;
