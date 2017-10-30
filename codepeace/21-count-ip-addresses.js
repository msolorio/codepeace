'use strict';

// checks if all values in array are numbers
function allValsAreNumbers(arr) {
  return arr.reduce((allAreNumbers, item) => {
    if (typeof item !== 'number') return false;
    return allAreNumbers;
  }, true);
}

function ipsBetween(ip1, ip2) {

  if (arguments.length !== 2) return new Error('2 inputs must be provided');

  // get array for number set of each ip
  const ip1Vals = ip1.split('.').map(string => parseInt(string));
  const ip2Vals = ip2.split('.').map(string => parseInt(string));

  // checks if both inputs are in ip address format
  if (
    !allValsAreNumbers(ip1Vals)
    || !allValsAreNumbers(ip2Vals)
    || ip1Vals.length !== 4
    || ip2Vals.length !== 4
  ) {
    return new Error('both inputs must in ip address format');
  }

  // get differences in values of each set
  const diffs = ip1Vals.map((val, index) => ip2Vals[index] - val);

  // calculate the number of ip addresses inbetween the 2 provided
  return diffs[0] * Math.pow(256, 3)
        + diffs[1] * Math.pow(256, 2)
        + diffs[2] * 256
        + diffs[3];
}

module.exports = ipsBetween;
