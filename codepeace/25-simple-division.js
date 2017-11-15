/*
In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).
*/

function getPrimeFactors(remainder) {
  const factors = [];

  for (let i=2; i<=remainder; i++) {
    while ((remainder % i) === 0) {
      factors.push(i);
      remainder = remainder / i;
    }
  }

  return factors;
}

function divisbleByPrimes(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return new Error('both inputs must be numbers');
  }

  const primeFactors = getPrimeFactors(b);

  return primeFactors.reduce((divisibleByAll, factor) => {
    if (a % factor !== 0) return false;
    return divisibleByAll;
  }, true);
}

module.exports = divisbleByPrimes;
