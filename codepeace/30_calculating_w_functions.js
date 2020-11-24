/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function performMath(firstNum, secondNum, operation) {
  firstNumRounded = Math.floor(firstNum);
  secondNumRounded = Math.floor(secondNum);

  switch(operation) {
    case 'plus':
      return firstNumRounded + secondNumRounded;

    case 'minus':
      return firstNumRounded - secondNumRounded;

    case 'times':
      return firstNumRounded * secondNumRounded;

    case 'dividedBy':
      return Math.floor(firstNumRounded / secondNumRounded);
  }
}

// DYNAMICALLY BUILD NUMBER FUNCTION
function buildNumFunction(funcName, num) {
  const obj = {
    // IF ARGS PASSED PERFORM MATH OPERATION, OTHERWISE RETURN NUM
    [funcName]: function(arg) {
      if (arg) return performMath(num, arg.secondNum, arg.operation);
      return num;   
    }
  }

  return obj[funcName];
}

// DYNAMICALLY BUILD OPERATION FUNCTION
function buildOperationFunc(operationName) {
  const obj = {
    // FUNC RETURNS OBJECT WITH OPERATION, AND NUM PASSED IN
    [operationName]: function(num) {
      return { operation: operationName, secondNum: num };
    }
  }

  return obj[operationName];
}

const zero = buildNumFunction('zero', 0);
const one = buildNumFunction('one', 1);
const two = buildNumFunction('two', 2);
const three = buildNumFunction('three', 3);
const four = buildNumFunction('four', 4);
const five = buildNumFunction('five', 5);
const six = buildNumFunction('six', 6);
const seven = buildNumFunction('seven', 7);
const eight = buildNumFunction('eight', 8);
const nine = buildNumFunction('nine', 9);

const plus = buildOperationFunc('plus');
const minus = buildOperationFunc('minus');
const times = buildOperationFunc('times');
const dividedBy = buildOperationFunc('dividedBy');
