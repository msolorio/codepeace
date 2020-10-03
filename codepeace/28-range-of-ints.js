/*
Implement a function named generateRange(min, max, step), which
takes three arguments and generates a range of integers from min
to max, with the step. The first integer is the minimum value,
the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
*/

function getRangeOfIntergers(min, max, step) {
  if (min > max) {
    return new Error(`min argument must be less than or equal to max number. min: ${min}. max: ${max}`);
  }

  if (step <= 0) {
    return new Error(`step argument must be greater than zero. step: ${step}`);
  }

  const ints = [];
  for (let i = min; i <= max; i += step) ints.push(i);

  return ints;
}

module.exports = getRangeOfIntergers;
