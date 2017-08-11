/*
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/

function comp(array1, array2) {
  if (array1 === null || array1 === undefined || array2 === null || array2 === undefined) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  const array1Squared = array1.map((num) => {
    return Math.pow(num, 2);
  });

  const allInArray2Included = array2.reduce(function(allIncluded, num) {
    return array1Squared.indexOf(num) > -1 ? allIncluded : false;
  }, true);

  const allInArray1Included = array1Squared.reduce(function(allIncluded, num) {
    return array2.indexOf(num) > -1 ? allIncluded : false;
  }, true);

  return allInArray2Included && allInArray1Included;
}

module.exports = { comp };
