/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArrays(arr1, arr2) {
  if (arguments.length !== 2) return new Error('two params must be provided');

  if (Array.isArray(arr1) === false
  || Array.isArray(arr2) === false) {
    return new Error('both params must be arrays')
  }

  const onlyInArr1 = arr1.reduce((onlyInArr1, item) => {
    if (arr2.indexOf(item) < 0) return onlyInArr1.concat(item);
    return onlyInArr1;
  }, []);

  const onlyInArr2 = arr2.reduce((onlyInArr2, item) => {
    if (arr1.indexOf(item) < 0) return onlyInArr2.concat(item);
    return onlyInArr2;
  }, []);

  return [...onlyInArr1, ...onlyInArr2];
}

module.exports = diffArrays;
