const should = require('chai').should();

const { isPrime } = require('../../codepeace/13-is-prime');

describe('isPrime', function() {
  it('should return true when given a prime number as an input', function()  {
    const primeNumCases = [2, 3, 5, 7, 11, 13, 17, 19, 23];

    primeNumCases.forEach((num) => {
      isPrime(num).should.equal(true);
    });
  });

  it('should return false when given a number that is not prime as an input', function() {
    const nonPrimeNumCases = [0, 1, 4, 6, 8, 9, 10, 12, 20, -1, -4];

    nonPrimeNumCases.forEach((num) => {
      isPrime(num).should.equal(false);
    });
  });
});