function findFactorial(input) {
  if (input === 1) return 1;
  return input * findFactorial(input-1);
}

function zeros(input) {
  const factorial = findFactorial(input);

  let numOfZeros = 0;
  let denominator = 10;
  while (factorial % denominator === 0) {
    numOfZeros += 1;
    denominator = denominator * 10;
  }

  return numOfZeros;
}

module.exports = { zeros };