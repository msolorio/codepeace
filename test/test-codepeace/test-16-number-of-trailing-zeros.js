const should = require('chai').should();

const { zeros } = require('../../codepeace/16-number-of-trailing-zeros');

describe('zeros', function() {
  it('should return number of zeros in factorial of given number', function() {
    
    const normalCases = [
      {input: 12, expected: 2},
      {input: 3, expected: 0},
      {input: 10, expected: 2}
    ];

    normalCases.forEach(function(testCase) {
      zeros(testCase.input).should.equal(testCase.expected);
    });

  });
});
