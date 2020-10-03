/*
You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers.

Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"

The available operations are (in this order of preference):

1) addition
2) subtraction
3) multiplication
4) division
*/

function convertStrToNumsArray(str) {
  return str.split(" ").map((str) => Number(str));
}

// check which operation needs to be run on first and second
// number to get third number
// SEE WHICH OPERATION RESULTS IN 3RD NUMBER
function checkOperation(first, second, third) {
  switch(true) {
    case Math.round(first + second) === third:
      return 'addition';

    case Math.round(first - second) === third:
      return 'subtraction';

    case Math.round(first * second) === third:
      return 'multiplication';

    case Math.round(first / second) === third:
      return 'division';

    default:
      return 'no-matching-operation';
  }
}

function getStringOfOperations(stringOfNums) {
  // CONVERT STRING INTO ARRAY OF NUMBERS
  const numsArray = convertStrToNumsArray(stringOfNums);
  
  // LOOP THROUGH NUMBERS STARTING WITH 3RD
  const arrayOfOps = numsArray.reduce((accArr, num, index) => {
    if (index >= 2) {
      // FOR EACH NUMBER CHECK OPERATION FOR PREVIOUS 2 NUMBERS
      accArr.push(checkOperation(numsArray[index - 2], numsArray[index - 1], num));
      return accArr;
    }

    return accArr;
  }, []);

  // CONVERT ARRAY OF OPS INTO STRING
  return arrayOfOps.join(', ');
}

module.exports = getStringOfOperations;
