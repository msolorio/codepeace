// given an array
// return the number in the array that occurs an odd number of times
function findOdd(array) {

  // create object with number mapping to how many times it occurs
  const numsWOccurances = array.reduce((resultObj, num) => {
    if (resultObj[num] === undefined) resultObj[num] = 1;
    else resultObj[num]++;

    return resultObj;
  }, {});

  // find the first number with odd occurance value
  // convert to integer and return
  for (num in numsWOccurances) {
    if (numsWOccurances[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}

module.exports = { findOdd };
