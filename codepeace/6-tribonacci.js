function getSequence(firstThree, length) {

  const resultArr = firstThree;

  for (let i=2; i<length-1; i++) {
    let newNum = resultArr[i] + resultArr[i-1] + resultArr[i-2];
    resultArr.push(newNum);
  }

  return resultArr;
}

module.exports = { getSequence };